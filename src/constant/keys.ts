

export type key =
    'courseCompletion' | 'courseEngagment' | "projectDegree" | 'teamProjectDegree'|'expectedTypeWork'|'targetWorkCity'|"expectedContractType" |'expectedSalary'| 'canTakeApprenticeship'|'monthsOfCommercialExp'


export const keys: key[] = ['courseCompletion','courseEngagment',"projectDegree",'teamProjectDegree','expectedTypeWork','targetWorkCity',"expectedContractType", 'expectedSalary','canTakeApprenticeship','monthsOfCommercialExp']

export const text = {
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