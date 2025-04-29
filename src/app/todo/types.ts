export type TodoProps = {
  id: number;
  title: string;
  name: string;
  author: string;
  isCompleted: boolean;
  tags?: string[];
  date: Date;
};
