import React from 'react'
import './filter.css'
import filter from '../../../assets/icon/filter.svg'
import save from '../../../assets/icon/save.svg'
export default function Filteration() {
    return (
        <div>
            <div className='filter_main'>
                <div className='filter_shadow'>
                    <div className='filteration'>
                        <div className='buy_drop'>
                            <input type='text' placeholder='To search' />
                        </div>
                        <div className='by_drop'>
                            <select type='text'>
                                <option>ē 0</option>
                                <option>ē 100000</option>
                                <option>ē 150000</option>
                                <option>ē 200000</option>
                                <option>ē 250000</option>
                                <option>ē 300000</option>
                            </select>
                        </div>
                        <div className='to_drop'>
                            <select>
                                <option>ē 0</option>
                                <option>ē 100000</option>
                                <option>ē 150000</option>
                                <option>ē 200000</option>
                                <option>ē 250000</option>
                                <option>ē 300000</option>
                            </select>
                        </div>
                        <div className='badroom_drop'>
                            <select>
                                <option>ē 0</option>
                                <option>ē 100000</option>
                                <option>ē 150000</option>
                                <option>ē 200000</option>
                                <option>ē 250000</option>
                                <option>ē 300000</option>
                            </select>
                        </div>
                        <div className='bathroom_dtrop'>
                            <select>
                                <option>ē 0</option>
                                <option>ē 100000</option>
                                <option>ē 150000</option>
                                <option>ē 200000</option>
                                <option>ē 250000</option>
                                <option>ē 300000</option>
                            </select>
                        </div>
                        <div className='filter'>
                            <div className='filter_btn'>
                                <span>Filter</span>
                                <img src={filter} alt='filter' />
                            </div>
                        </div>
                        <div className='save_drop'>
                            <div className='save_btn'>
                                <span>Save search</span>
                                <img src={save} alt='save' />
                            </div>
                        </div>
                        <div className='empty'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
