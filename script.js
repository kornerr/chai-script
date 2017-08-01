
    f.make_entity(10,10,1,1,"entity1").updater = fun(e){ e.x += 1; e.y += 1 };
    f.make_entity(10,10,10,10,"entity2").updater = fun(e){ e.x += 2; e.y += 2 };
    f.make_entity(10,10,20,20,"entity3");

    print(f.get_entity("entity1").x == 1)
    print(f.get_entity("entity2").x == 10)
    print(f.get_entity("entity3").x == 20)

    f.update_entities(); // this runs the function objects we set in the previous lines
    // we should now see the updated values

    print(f.get_entity("entity1").x == 2)
    print(f.get_entity("entity2").x == 12)
    print(f.get_entity("entity3").x == 20) // this one has no updater, so it stays the same

    //var entity = Entity(1, 1, 1, 1, "newentity")
    //print(entity.x)
