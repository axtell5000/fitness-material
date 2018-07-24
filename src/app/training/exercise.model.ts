// interface - here we are creating and naming a unique data structure. This allows TypeScript to type check this unique data-type
// during compilation
// It is not around after compilation. We could have used a Class, but interface is more light-weight if just for data structure

export interface Exercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date;
  state?: 'completed' | 'cancelled' | null;
}
