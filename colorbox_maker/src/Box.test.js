import React from "react"
import BoxList from "./BoxList"
import {render} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import Box from "./Box"



test("Smoke Test: Renders main BoxList component", function(){
render(<BoxList/>)
});

test("Snapshot test of BoxList", function(){
    const {asFragment} = render(< BoxList />)
    expect(asFragment()).toMatchSnapshot()
})


test("Smoke Test: Renders individual Box component", function(){
    render(<Box/>)
    });

test("Snapshot test of Box", function(){
        const {asFragment} = render(< Box />)
        expect(asFragment()).toMatchSnapshot()
    })