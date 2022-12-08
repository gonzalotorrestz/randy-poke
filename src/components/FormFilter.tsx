import React, { Component } from 'react'
import DropdownItem from './DropdownItem'

export default class FormFilter extends Component<any, any> {
    render() {
        return (
            <div className="w-1/2 md:w-1/4 px-1 mb-0 md:mb-6 mb:px-3">
                <p className='text-stone-700 font-sans text-sm'>{this.props.label}</p>
                <DropdownItem id={this.props.id} dropdownData={this.props.dropdownData} onChange={this.props.onChange} />
            </div>
        )
    }
}

