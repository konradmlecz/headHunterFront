export type KeysOfRate =
    | 'courseCompletion'
    | 'courseEngagement'
    | 'projectDegree'
    | 'teamProjectDegree';

export type KeysOfEx = 'expectedTypeWork' | 'expectedContractType';

export type KeysOfNormal =
    | 'expectedSalary'
    | 'canTakeApprenticeship'
    | 'monthsOfCommercialExp';

type Keys = KeysOfRate | KeysOfEx | KeysOfNormal;

interface QueryInterface {
    courseCompletion: number[];
    courseEngagement: number[];
    projectDegree: number[];
    teamProjectDegree: number[];
    expectedTypeWork: string[];
    expectedContractType: string[];
    expectedSalary: string[];
    canTakeApprenticeship: boolean[];
    monthsOfCommercialExp: number[];
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
    ifIsCheckedEx(key: KeysOfEx, str: string) {
        if (this.state[key].includes(str)) {
            return true;
        } else return false;
    }

    setExpected(key: KeysOfEx, str: string) {
        if (this.ifIsCheckedEx(key, str)) {
            const arr = this.state[key].filter((item) => item !== str);
            return {
                ...this.state,
                [key]: arr,
            };
        } else {
            const arr = [...this.state[key]];
            arr.push(str);
            return {
                ...this.state,
                [key]: arr,
            };
        }
    }
    setNormal(key: KeysOfNormal, val: string | number | boolean) {
        const arr = [...this.state[key]];
        arr[0] = val;
        return {
            ...this.state,
            [key]: arr,
        };
    }

    prepareState() {
        const data: any = {};
        for (const property in this.state) {
            if (this.state[property as Keys].length) {
                if (property === 'expectedSalary') {
                    data[property] = [0, ...this.state[property as Keys]];
                } else {
                    data[property] = this.state[property as Keys];
                }
            }
        }
        return data;
    }
}
