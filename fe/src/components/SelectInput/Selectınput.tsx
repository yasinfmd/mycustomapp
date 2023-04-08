import React, {useState} from 'react';
import './SelectInput.css'
import {BaseProps} from "../../interfaces/BaseProps";


interface PropTypes extends BaseProps{
    data: Array<{ key: string, value: string }>
    isLoading?: boolean
    loadingText?: string
    noDataText?: string
    selectedOption?:{key:string,value:string}
}

const SelectInput = (props: PropTypes) => {
    const {label, isLoading, data, loadingText = 'Loading ...',
        placeHolder='Please Select',
        noDataText = 'No data found',selectedOption} = props
    const [isOpen, setIsOpen] = useState(false);

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: any) => {
        setIsOpen(false);
    };

    return (
        <div className="select-wrapper">
            <div className="input-label">{label}</div>
            <div className="">
                <div
                    className="select"
                    onClick={toggleSelect}
                >
                    <span>{selectedOption?.value || placeHolder}</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M6 8l4 4 4-4"></path>
                    </svg>
                </div>
                {

                    isOpen && (
                        <div className="select-context">
                            {
                                isLoading ? (
                                        <div className="py-1 px-4 cursor-not-allowed opacity-50">{loadingText}</div>
                                    ) :
                                    data.length === 0 ? (
                                            <div className="py-1 px-4 cursor-not-allowed opacity-50">{noDataText}</div>
                                        ) :
                                        data.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`${
                                                    selectedOption?.value === option.value ? 'selected' : ''
                                                } select-item`}
                                                onClick={() => handleOptionClick(option)}
                                            >
                                                {option.value}
                                            </div>
                                        ))}
                        </div>
                    )}
            </div>
        </div>
    );
};

export default SelectInput;
