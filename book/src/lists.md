# Lists

Another built-in data structure is the `List`. Lists are ordered sequence that you can iterate over, and arbitrarily insert/remove from. The values in a list are themselves state machines (if you never want to modify the inner state of values on a list, you can use `Constant` as a wrapper around the values.)

Let's use the `ToDoListItem` from the last section to create a `ToDoList`

```rust,noplaypen
use aper::data_structures::List;
# use aper::StateMachine;
# use aper::data_structures::Atom;
# use aper_derive::StateMachine;
# use serde::{Serialize, Deserialize};
# use std::default::Default;
# 
# #[derive(StateMachine, Serialize, Deserialize, Debug, Clone)]
# struct ToDoListItem {
#     done: Atom<bool>,
#     label: Atom<String>,
# }
# 
# impl ToDoListItem {
#     pub fn new(label: String) -> Self {
#         ToDoListItem {
#             done: Atom::new(false),
#             label: Atom::new(label),
#         }
#     }
# }

# fn main() {
let mut to_do_list: List<ToDoListItem> = Default::default();

// Initially, the list is empty. We need to add things to it.

// Append generates and returns an identifier which we can later
// use to identify the record.
let (dog_food_id, dog_food_transition) = to_do_list.append(
		ToDoListItem::new("Get dog food".to_string())
);

to_do_list.apply(dog_food_transition);

let (lunch_id, lunch_transition) = to_do_list.append(
		ToDoListItem::new("Make lunch".to_string())
);

to_do_list.apply(lunch_transition);

let emphasize_dog_food = to_do_list.map_item(dog_food_id,
	|it| it.map_label(|lbl| lbl.replace("Get DOG FOOD!".to_string())));

to_do_list.apply(emphasize_dog_food);

let mark_lunch_done = to_do_list.map_item(lunch_id,
	|it| it.map_done(|done| done.replace(true)));
# }
```

If this method of calling `map_*` seems tedious, don't worry! Later when we actually implement the UI, it will take care of itself due to the fact that the view hierarchy usually maps directly to the state machine hierarchy.