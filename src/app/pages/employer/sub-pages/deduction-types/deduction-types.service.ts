import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Utils } from '../../../../core/utils';

@Injectable()
export class DeductsService implements Resolve<any> {
  deduct_types: any[];
  deduct_calc_methods: any[];
  deduct_default_repetition: any;

  onDeductTypesUpdated = new BehaviorSubject<any>([]);
  onDeductCalcMethodUpdated = new BehaviorSubject<any>([]);
  onDeductDefaultReputitionUpdated = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  /**
   * The Chat App Main Resolver
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([this.getDeductTypes(), this.getDeductCalcMethod(), this.getDeductDefaultReputition()]).then(
        ([deduct_types, deduct_calc_methods, deduct_default_repetition]) => {
          this.deduct_calc_methods = deduct_calc_methods;
          this.deduct_default_repetition = deduct_default_repetition;
          this.onDeductCalcMethodUpdated.next(deduct_calc_methods);
          this.onDeductDefaultReputitionUpdated.next(deduct_default_repetition);
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get deducts
   * @returns {Promise<any>}
   */
  getDeductTypes(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/deduct-types').subscribe((response: any) => {
        this.deduct_types = response;
        this.onDeductTypesUpdated.next(response);
        resolve(response);
      }, reject);
    });
  }

  /**
   * Get Contacts
   * @returns {Promise<any>}
   */
  getDeductCalcMethod(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/deduct-calc-methods').subscribe((response: any) => {
        resolve(response);
      }, reject);
    });
  }

  /**
   * Get Deduct Default Reputition
   * @returns {Promise<any>}
   */
  getDeductDefaultReputition(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/deduct-default-repetition').subscribe((response: any) => {
        resolve(response);
      }, reject);
    });
  }

  /**
   * Update Deduct Default Reputition
   * @param value : Deduct type
   * @returns {Promise<any>}
   */
  updateDeductType(value: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('api/deduct-types/' + value.id, { ...value }).subscribe((response: any) => {
        this.getDeductTypes();
        resolve(response);
      }, reject);
    });
  }

  /**
   * Create New Deduct Type
   * @param value
   * @returns {Promise<any>}
   */
  createNewDeductType(value: any) {
    return new Promise((resolve, reject) => {
      const uniqeId = Utils.generateGUID();

      value.id = uniqeId;

      this.http.post('api/deduct-types', { ...value }).subscribe((response: any) => {
        this.getDeductTypes();
        resolve(response);
      }, reject);
    });
  }

  /**
   * Delete Deduct Type
   * @param _type
   * @returns {Promise<any>}
   */
  deleteSelectedDeductType(_type: any) {
    const deduct_type = this.deduct_types.find(type => {
      return type.id === _type.id;
    });

    const deductIndex = this.deduct_types.indexOf(deduct_type);
    this.deduct_types.splice(deductIndex, 1);
    this.onDeductTypesUpdated.next(this.deduct_types);
  }
}
