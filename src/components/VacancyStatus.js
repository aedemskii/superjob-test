import React, { Component } from 'react';
import done1 from './imgs/done@1x.png';
import done2 from './imgs/done@2x.png';
import done3 from './imgs/done@3x.png';
import search1 from './imgs/search@1x.png';
import search2 from './imgs/search@2x.png';
import search3 from './imgs/search@3x.png';

class VacancyStatus extends Component {
    render() {
        let vacancyStatus, src1, src2, src3, name;
        if (this.props.isActive) {
            vacancyStatus = 'Вакансия открыта, идет подбор кандидатов';
            src1 = search1;
            src2 = search2;
            src3 = search3;
            name = 'search';
        } else {
            vacancyStatus = 'Вакансия закрыта, сотрудник нанят';
            src1 = done1;
            src2 = done2;
            src3 = done3;
            name = 'done';
        }
        return (
            <div className='vacancy-status'>
                <div className='img-holder'>
                    <img src={src1} srcSet={`${src2}, ${src3}`} alt='' className={'img-' + name}/>
                </div>
                <span>{vacancyStatus}</span>
            </div>
        );
    }
}

export default VacancyStatus;
