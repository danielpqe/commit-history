export interface BaseRepository<T> {
  insert(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(id: string): Promise<boolean>;
  findById(id: string): Promise<T>;
  findAll(): Promise<T>;
  //findAll(): Promise<T[]>;
}
