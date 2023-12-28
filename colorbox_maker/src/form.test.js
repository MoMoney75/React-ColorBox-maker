import React from 'react'
import BoxForm from './NewBoxForm'
import App from './App'
import {render,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Render form", function(){
    render(< BoxForm />)
})

test("h1 is in document", function(){
    let {getByText} = render(<BoxForm />)
    const h1 = getByText("Create a new box!")
    expect(h1).toBeInTheDocument()

})


test("Snapshot of form", function(){
    const {asFragment} = render(< BoxForm />)
    expect(asFragment()).toMatchSnapshot()
})

test("Successfully changes values of form inputs", function(){
    const submitMock = jest.fn()
    const {getByLabelText,getByText,container} = render(< App onFormSubmit={submitMock} />)


    expect(getByLabelText("background color:").value).toEqual("")
    expect(getByLabelText("width:").value).toEqual("")
    expect(getByLabelText("height:").value).toEqual("")

    fireEvent.change(getByLabelText("background color:"),{ 
        target:{ name: "backgroundColor", value:"black"}
    })

    fireEvent.change(getByLabelText("width:"),{ 
        target:{ name: "width", value:"100"}
    })

    fireEvent.change(getByLabelText("height:"),{ 
        target:{ name: "height", value:"100"}
    })


    expect(getByLabelText("background color:").value).toEqual("black")
    expect(getByLabelText("width:").value).toEqual("100")
    expect(getByLabelText("height:").value).toEqual("100")
  

    expect(container.querySelector("li")).not.toBeInTheDocument()


    fireEvent.submit(getByText("submit"))
    expect(container.querySelector("ul")).toBeInTheDocument()
    expect(container.querySelector("li")).toBeInTheDocument()


})