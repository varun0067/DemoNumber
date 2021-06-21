export class personalHomeLoan{
    constructor(
        public customerId:string,
        public amount: string,
        public loanApplyDate: Date,
        public loanIssueDate: Date,
        public rateOfInterest: string,
        public durationOfLoan: string,
        public annualIncome: string,
        public companyName: string,
        public designation: string,
        public totalExperience: string,
        public experienceInCurrentCompany: string
    ){}
}