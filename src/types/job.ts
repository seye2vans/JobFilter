export interface Job{
    id: number;
    title : string;
    companyName: string;
    category: string;
    candidateRequiredLocation: string;
    publicationDate: string;
    salary: string;
    tags: string[];
    jobType: string;
    description: string;
    url : string;
}