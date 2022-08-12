import { GlobalState } from '../context/store';
import React from 'react';
import { getData } from '../utils/getData';
import { ubdateItemForId } from '../utils/ubdateItemForId';
import { updateItem } from '../utils/updateItem';
import { postData } from '../utils/postData';

type Props = {
    dispatch: React.Dispatch<any>;
    state: GlobalState;
};

export class ContextManager {
    dispatch: React.Dispatch<any>;
    state: GlobalState;

    constructor({ dispatch, state }: Props) {
        this.dispatch = dispatch;
        this.state = state;
    }

    async ubdateStudents() {
        const data = await getData({ link: 'student/all' });
        if (data.isSuccess) {
            this.dispatch({
                type: 'SET_STUDENTS_AVAILABLE',
                payload: {
                    studentsAvailable: data.data,
                    availableTotalPages: data.totalPages,
                    availableActualPage: this.state.availableActualPage
                },
            });
        }
        const data2 = await getData({ link: 'student/for-interview' });
        if (data2.isSuccess) {
            this.dispatch({
                type: 'SET_STUDENTS_INTERVIEW',
                payload: {
                    studentsInteview: data2.data,
                    interviewTotalPages: data2.totalPages
                },
            });
        }
    }

    async setStatusOfStudentToInteview(id: string) {
        const data = await ubdateItemForId({
            id: id,
            link: 'headhunter/interview/',
        });
        if (data.isSuccess) {
            await this.ubdateStudents();
        }
    }

    async setStatusOfStudentToAvailable(id: string) {
        const data = await ubdateItemForId({
            id: id,
            link: 'headhunter/disinterest/',
        });
        if (data.isSuccess) {
            await this.ubdateStudents();
        }
    }

    async setStatusOfStudentToEmployed(id: string) {
        const data = await ubdateItemForId({
            id: id,
            link: 'headhunter/employed/',
        });
        if (data.isSuccess) {
            await this.ubdateStudents();
        }
    }

    async studentSetToEmployed() {
        const data = await updateItem({ link: 'student/employed/' });
        if (data.isSuccess) {
            this.dispatch({
                type: 'CLEAR_USER',
            });
        }
    }

    setChoosenStudent(id: string) {
        const student = this.state.studentsInteview.find(
            (item) => item.id === id
        );
        if (student) {
            this.dispatch({
                type: 'SET_STUDENT_CV',
                payload: {
                    choosenStudent: {
                        ...student,
                    },
                },
            });
        }
    }

    getStudent() {
        return this.state.choosenStudent;
    }

    async setFilter(data: any, setIsPopUpVisible: (bool: boolean) => void) {
        const res = await postData({ link: 'student/set-filter', data: data });
        if (res.isSuccess) {
            this.dispatch({
                type: 'SET_STUDENTS_AVAILABLE',
                payload: {
                    studentsAvailable: res.data,
                    availableTotalPages: res.totalPages,
                    availableActualPage: 1
                },
            });
            setIsPopUpVisible(false);
        }
    }

    async handlePrevPage(){
        if(this.state.availableActualPage > 1 ){
            const data = await getData({ link: 'student/all', parametr:this.state.availableActualPage - 1 });
            if (data.isSuccess) {
                this.dispatch({
                    type: 'SET_STUDENTS_AVAILABLE',
                    payload: {
                        studentsAvailable: data.data,
                        availableTotalPages: data.totalPages,
                        availableActualPage: this.state.availableActualPage - 1
                    },
                });
            }
        }
    }
    async handleNextPage(){
        if(this.state.availableActualPage < this.state.availableTotalPages){
            const data = await getData({ link: 'student/all', parametr:this.state.availableActualPage + 1 });
            if (data.isSuccess) {
                this.dispatch({
                    type: 'SET_STUDENTS_AVAILABLE',
                    payload: {
                        studentsAvailable: data.data,
                        availableTotalPages: data.totalPages,
                        availableActualPage: this.state.availableActualPage + 1
                    },
                });
            }
        }
        
    }
}
