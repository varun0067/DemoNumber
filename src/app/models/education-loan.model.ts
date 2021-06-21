export class educationLoan{
    constructor(
        public customerId:string,
        public amount: string,
        public loanApplyDate: Date,
        public loanIssueDate: Date,
        public rateOfInterest: string,
        public durationOfLoan: string,
        public courseFee: string,
        public course:string,
        public fatherName: string,
        public fatherOcuupation: string,
        public fatherTotalExperience: string,
        public fatherExperienceInCurrentCompany: string,
        public rationCardNumber:string,
        public annualIncome:string
    ){}
}