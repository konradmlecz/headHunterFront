

export type qualitiesKey =
    'courseCompletion' | 'courseEngagment' | "projectDegree" | 'teamProjectDegree'|'expectedTypeWork'|'targetWorkCity'|"expectedContractType" |'expectedSalary'| 'canTakeApprenticeship'|'monthsOfCommercialExp'


export const qualitiesStudent: qualitiesKey[] = ['courseCompletion','courseEngagment',"projectDegree",'teamProjectDegree','expectedTypeWork','targetWorkCity',"expectedContractType", 'expectedSalary','canTakeApprenticeship','monthsOfCommercialExp']

export const qualitiesText = {
    expectedContractType: 'Oczekiwany typ kontraktu',
    expectedSalary: "Oczekiwane wynagrodzenie miesięczne netto",
    teamProjectDegree: "Ocena pracy w zespole Scrum",
    monthsOfCommercialExp: "Komercyjne doświadczenie w programowaniu",
    expectedTypeWork:"Preferowane miejsce pracy",
    projectDegree: "Ocena kodu w projekcie własnym",
    courseEngagment: "Ocena aktywności i zaangażowanie na kursie",
    courseCompletion: "Ocena przejścia kursu",
    canTakeApprenticeship: "Zgoda na odbycie praktyk/stażu",
    targetWorkCity: "Docelowe miasto, gdzie chce pracować kan."
}

export const qualitiesStudentText: qualitiesKey[] = ['expectedTypeWork','targetWorkCity',"expectedContractType", 'expectedSalary','monthsOfCommercialExp']

export const qualitiesStudentDegree: qualitiesKey[] = ['courseCompletion','courseEngagment',"projectDegree",'teamProjectDegree']


export const qualitiesStudentBoolean: qualitiesKey[] = ['canTakeApprenticeship']
