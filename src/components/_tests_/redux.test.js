import { 
  clearTitle, 
  // getTitle,
  // actionTypes
} 
  from '../../actions'

it('return an empty string as payload', () => {
  const action = clearTitle("")
  console.log("action", action)
  expect(action).toBe({ type: "CLEAR_TITLE", output: "" })
})

// it('return a string of the title', () => {
//   const action = getTitle("Alita")
//   console.log("action", action)
//   expect(action).toBe({ type: "GET_TITLE", output: "Alita" })
// })


// const { enzymeWrapper, props } = shallowSetup();
// // enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector. 
// expect(enzymeWrapper.find('img').hasClass('ui image')).toBe(true);
// expect(enzymeWrapper.find('.header').text()).toBe(props.title);
// expect(enzymeWrapper.find('button.ui.basic.red.button').text()).toBe('Delete');
// // enzymeWrapper.containsMatchingElement(node i.e reactElement) : Check if the provided React element matches one element in the render tree. Returns a boolean.
// expect(enzymeWrapper.containsMatchingElement(<button>Delete</button>)).toBe(true);