import React, { Component } from 'react'

export default class DropdownItem extends Component<any, any> {
    render() {
        return (
            <div className="relative">
                <select
                    id={this.props.id}
                    className="block appearance-none w-full bg-pink-200 border border-gray-200 text-gray-700 py-2 pl-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(selected) => { this.props.onChange(selected.target.selectedIndex) }}
                >
                    {this.props.dropdownData?.map((data: any) => {
                        return (
                            <option key={data.id} value={data.id}>
                                {data.label}
                            </option>
                        )
                    })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        )
    }
}

