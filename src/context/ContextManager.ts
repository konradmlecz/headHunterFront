import {GlobalState } from '../context/store'
import React,{FC, useEffect} from 'react';
import {getData} from '../utils/getData';
import { ubdateItemForId } from '../utils/ubdateItemForId'

type Props = {
    dispatch: React.Dispatch<any>;
    state: GlobalState;
}

export class ContextManager {
    dispatch: React.Dispatch<any>;
    state: GlobalState;
    constructor({dispatch, state}:Props){
        this.dispatch = dispatch;
        this.state = state;
    }

    async ubdateStudents() {
        const data = await getData({link:'student/all'})
        if (data.isSuccess){
        this.dispatch({
          type:'SET_STUDENTS_AVAILABLE',
          payload:{
            studentsAvailable: data.data
          }
        })
        }
        const data2 = await getData({link:'student/for-interview'})
        if (data2.isSuccess){
        this.dispatch({
          type:'SET_STUDENTS_INTERVIEW',
          payload:{
            studentsInteview: data2.data
          }
        })
        }
    }
    
    async setStatusOfStudentToInteview(id:string){
        const data = await ubdateItemForId({id:id, link:'headhunter/interview/'})
        if(data.isSuccess){
            await this.ubdateStudents()
        }
    }

    async setStatusOfStudentToAvailable(id:string){
      console.log(id,'id');
      const data = await ubdateItemForId({id:id, link:'headhunter/disinterest/'})
      console.log(data, "res");
      if(data.isSuccess){
          await this.ubdateStudents()
      }
  
    }

    async setStatusOfStudentToEmployed(id:string){
      console.log(id,'id');
      const data = await ubdateItemForId({id:id, link:'student/employed/'})
      console.log(data, "res");
      if(data.isSuccess){
          await this.ubdateStudents()
      }
  
    }

    setChoosenStudentId(id:string){
      this.dispatch({
        type:'SET_STUDENT_ID',
        payload:{
          choosenStudent: {
            id
        }
        }
      })
    }
    getStudent(){
      return this.state.studentsInteview.filter(item=> item.id === this.state.choosenStudent.id)[0]
    }
}