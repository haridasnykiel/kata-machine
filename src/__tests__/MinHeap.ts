import MinHeap from "@code/MinHeap";

test("min heap", function () {
    const heap = new MinHeap();

    expect(heap.length).toEqual(0);

    heap.insert(5, 5, 5);
    heap.insert(3, 4, 3);
    heap.insert(69, 9, 69);
    heap.insert(420, 8, 420);
    heap.insert(4, 2, 4);
    heap.insert(1, 1, 1);
    heap.insert(8, 6, 8);
    heap.insert(7, 4, 7);

    expect(heap.length).toEqual(8);
    expect(heap.delete()?.weight).toEqual(1);
    expect(heap.delete()?.weight).toEqual(3);
    expect(heap.delete()?.weight).toEqual(4);
    expect(heap.delete()?.weight).toEqual(5);
    expect(heap.length).toEqual(4);
    expect(heap.delete()?.weight).toEqual(7);
    expect(heap.delete()?.weight).toEqual(8);
    expect(heap.delete()?.weight).toEqual(69);
    expect(heap.delete()?.weight).toEqual(420);
    expect(heap.length).toEqual(0);
});


