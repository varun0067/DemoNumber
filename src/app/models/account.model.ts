export class account {
    constructor(
        public customerId: string,
        public accountNumber: string,
        public name: string,
        public username: string,
        public password: string,
        public guardianType: string,
        public guardianName: string,
        public address: string,
        public citizenship: string,
        public state: string,
        public country: string,
        public email: string,
        public gender: string,
        public maritalStatus: string,
        public contactNumber: string,
        public dateOfBirth: Date,
        public registrationDate: Date,
        public accountType: string,
        public branchName: string,
        public citizenStatus: string,
        public initialDepositAmount: string,
        public identificationType: string,
        public identificationDocumentNumber: string,
        public referenceAccountHolderName: string,
        public referenceAccountHolderAccountNumber: string,
        public referenceAccountHolderAddress: string
    ) { }

}