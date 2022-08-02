import {GlobalState } from '../context/store'
import React,{FC, useEffect} from 'react';
import {getData} from '../utils/getData';
import { ubdateStatus } from '../utils/ubdateStatus'

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
    
    async ubdateStatusOfStudent(id:string){
        const data = await ubdateStatus({id:id})
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