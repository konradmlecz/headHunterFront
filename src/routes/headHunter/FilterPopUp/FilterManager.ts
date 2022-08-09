export type KeysOfRate =
    | 'courseCompletion'
    | 'courseEngagment'
    | 'projectDegree'
    | 'teamProjectDegree';

interface QueryInterface {
    courseCompletion: number[];
    courseEngagment: number[];
    projectDegree: number[];
    teamProjectDegree: number[];
    remote: boolean;
    office: boolean;
    employmentContract: boolean;
    b2b: boolean;
    mandatoryContract: boolean;
    contract: boolean;
    salaryFrom: number | string;
    salaryTo: number | string;
    apprenticeship: boolean;
    experience: number;
}

type Props = {
    state: QueryInterface;
};

export class FilterManager {
    state: QueryInterface;
    constructor({ state }: Props) {
        this.state = state;
    }
    ifIsChecked(key: KeysOfRate, num: number) {
        if (this.state[key].includes(num)) {
            return true;
        } else return false;
    }
    setRate(key: KeysOfRate, num: number) {
        if (this.ifIsChecked(key, num)) {
            const arr = this.state[key].filter((item) => item !== num);
            return {
                ...this.state,
                [key]: arr,
            };
        } else {
            const arr = [...this.state[key]];
            arr.push(num);
            return {
                ...this.state,
                [key]: arr,
            };
        }
    }
}
