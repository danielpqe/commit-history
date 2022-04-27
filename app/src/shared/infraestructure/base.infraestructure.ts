export abstract class BaseInfraestructure<T> {
  insert(commit: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(commit: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<T[]> {
    return Promise.resolve([
      { id: "1", message: "Commit message 1" },
      { id: "2", message: "Commit message 2" },
    ] as any[]);
  }
}
