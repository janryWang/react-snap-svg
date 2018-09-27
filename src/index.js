import React, { Component } from "react"
import Snap from "snapsvg"

const isFn = val => typeof val === "function"

export default class extends Component {
    componentDidMount() {
        const { children } = this.props
        if (this.svg && isFn(children)) {
            children(Snap(this.svg))
        }
    }

    render() {
        const { children, ...props } = this.props
        return (
            <svg
                {...props}
                ref={inst => {
                    if (inst) {
                        this.svg = inst
                    }
                }}
            >
                {!isFn(children) ? children : undefined}
            </svg>
        )
    }
}
