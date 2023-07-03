//your JS code here. If required.
function removeColor() {
  // Get the dropdown list element
  const dropdown = document.getElementById("colorSelect");

  // Get the selected color option
  const selectedColor = dropdown.value;

  // Find the index of the selected color option
  const selectedIndex = dropdown.selectedIndex;

  // Remove the selected color option from the dropdown list
  dropdown.remove(selectedIndex);

  // Display the final answer using alert()
  alert(`The level of the element is: ${selectedIndex + 1}`);
}