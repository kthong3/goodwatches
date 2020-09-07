package com.kthong3;

import java.util.List;

public interface Dao<T> {
    public List<T> getAll();
    public T get(int id);
    public void update(T type);
    public void delete(T type);
}
