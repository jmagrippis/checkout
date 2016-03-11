import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import checkoutApp from "./reducers"
import Checkout from "./components/Checkout"

const progressSteps = [
  { id: 1, current: true, text: "Basket" },
  { id: 2, current: false, text: "Your Details" },
  { id: 3, current: false, text: "Payment" },
  { id: 4, current: false, text: "Complete" }
]

const formSections = [
  { id: 1, label: "Existing Customer Log In", expandable: true, expanded: true, content: "First form content" },
  { id: 2, label: "New Customer Registration", content: "Second form content" }
]

let store = createStore(checkoutApp, { progressSteps, formSections })

render(
  <Provider store={store}>
    <Checkout />
  </Provider>,
  document.getElementById("checkout-app")
)
