export interface TasksListInterface {
  srcImage: string;
  title: string;
  href: string | number;
  alt: string;
  status: string;
}

export interface BusinessTasksListInterface {
  clickedIndex: number;
  author: string;
  created_at: string;
  title: string;
  content: string;
}
