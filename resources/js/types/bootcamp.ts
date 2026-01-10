export interface Bootcamp {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    price: number | null;
    status: 'open' | 'closed';
}
