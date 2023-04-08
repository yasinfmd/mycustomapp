import React, {useId} from 'react';

interface PropTypes {
    headers: Array<{ key: string, value: string }>
    data: Array<any>
    title: string
}

const Table = (props: PropTypes) => {
    const {headers, data, title} = props
    return (
        <div className="overflow-x-auto">
            <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
            <table className="table-auto min-w-full">
                <thead>
                <tr className="bg-gray-200">
                    {headers.map((item) => {
                        return (
                            <th className="px-4 py-2">{item.value}</th>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => {
                    return (
                        <tr key={row?._id} className="hover:bg-gray-100">
                            {headers.map((col, subIndex) => {
                                return (
                                    <td key={`${row?._id}_${row[col.key]}_${index}_${subIndex}`}
                                        className="border px-4 py-2">{row[col.key]}</td>
                                )

                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Table