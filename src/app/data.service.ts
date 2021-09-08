import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  classes = [
    {"name":"الاول ج","class_num":1,"morabe":"mahmod hlahla","student_num":26},
    {"name":"الاول ب","class_num":1,"morabe":"mahmod hlahla","student_num":25},
    {"name":"الاول ا","class_num":1,"morabe":"mahmod hlahla","student_num":20},
    {"name":"الثاني ج","class_num":2,"morabe":"mahmod hlahla","student_num":24},
    {"name":"الثاني ب","class_num":2,"morabe":"mahmod hlahla","student_num":21},
    {"name":"الثاني ا","class_num":2,"morabe":"mahmod hlahla","student_num":22},
    {"name":"الثالث ج","class_num":3,"morabe":"mahmod hlahla","student_num":26},
    {"name":"الثالث ب","class_num":3,"morabe":"mahmod hlahla","student_num":25},
    {"name":"الثالث ا","class_num":3,"morabe":"mahmod hlahla","student_num":20},
    {"name":"الاول ج","class_num":1,"morabe":"mahmod hlahla","student_num":26},
    {"name":"الاول ب","class_num":1,"morabe":"mahmod hlahla","student_num":25},
    {"name":"الاول ا","class_num":1,"morabe":"mahmod hlahla","student_num":20},
    {"name":"الثاني ج","class_num":2,"morabe":"mahmod hlahla","student_num":24},
    {"name":"الثاني ب","class_num":2,"morabe":"mahmod hlahla","student_num":21},
    {"name":"الثاني ا","class_num":2,"morabe":"mahmod hlahla","student_num":22},
    {"name":"الثالث ج","class_num":3,"morabe":"mahmod hlahla","student_num":26},
    {"name":"الثالث ب","class_num":3,"morabe":"mahmod hlahla","student_num":25},
    {"name":"الثالث ا","class_num":3,"morabe":"mahmod hlahla","student_num":20},
    {"name":"الاول ج","class_num":1,"morabe":"mahmod hlahla","student_num":26},
    {"name":"الاول ب","class_num":1,"morabe":"mahmod hlahla","student_num":25},
    {"name":"الاول ا","class_num":1,"morabe":"mahmod hlahla","student_num":20},
    {"name":"الثاني ج","class_num":2,"morabe":"mahmod hlahla","student_num":24},
    {"name":"الثاني ب","class_num":2,"morabe":"mahmod hlahla","student_num":21},
    {"name":"الثاني ا","class_num":2,"morabe":"mahmod hlahla","student_num":22},
    {"name":"الثالث ج","class_num":3,"morabe":"mahmod hlahla","student_num":26},
    {"name":"الثالث ب","class_num":3,"morabe":"mahmod hlahla","student_num":25},
    {"name":"الثالث ا","class_num":3,"morabe":"mahmod hlahla","student_num":20},
    
    
  ];

getlasses(){
  return this.classes;
}




}
