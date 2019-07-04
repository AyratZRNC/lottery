import React from 'react';
import Slider from "react-slick";
import './slick.css';
import { UserItem } from './UserItem'

//TODO: this shoud be in service layer!
const getUsers = () => new Promise(resolve => {
    //get data from server side!
    setTimeout(_ => {
        resolve([
            { name: 'первый', workOrg: 'ООО Название' },
            { name: 'второй', workOrg:'ООО Название' },
            { name: 'третий', workOrg: 'ООО Название' },
            { name: 'первый2', workOrg: 'ООО Название' },
            { name: 'второй2', workOrg:'ООО Название' },
            { name: 'третий2', workOrg: 'ООО Название' },
            { name: 'первый3', workOrg: 'ООО Название' },
            { name: 'второй3', workOrg:'ООО Название' },
            { name: 'третий3', workOrg: 'ООО Название' },
            { name: 'первый4', workOrg: 'ООО Название' },
            { name: 'второй4', workOrg:'ООО Название' },
            { name: 'третий4', workOrg: 'ООО Название', isWinner: true },
        ])
    }, 2000);
})

export const Drum  = (props) =>{
    const { autoplay, speed } = props;
    return (
        <SimpleSlider autoplay={autoplay} speed={speed}/>
    )
};


class SimpleSlider extends React.Component {
    constructor(props){
        super(props)
        this.slider = null;
        this.state = {
            users: []
        }
    }

    componentDidMount () {
        console.log(this.slider);
        setImmediate(async _ => {
            try {
                // TODO получаем юзеров
                const users = await getUsers();
                let winner;
                let others = users.filter(user => {
                    if (user.isWinner) {
                        winner = user;
                        return false;
                    }
                    return true;
                })

                this.setState({
                    users: [ ...others, winner]
                }, _ => {
                    this.slider.slickGoTo(others.length);
                });

            }
            catch(e) {
                console.log('error getting result -> ', e);
            }
        })
    }

    /**
     * <UserItem name={'первый'} workOrg={'ООО Название'}/>
     <UserItem name={'второй'} workOrg={'ООО Название'}/>
     <UserItem name={'третий'} workOrg={'ООО Название'}/>
     <UserItem name={'четвертый'} workOrg={'ООО Название'}/>
     <UserItem name={'пятый'} workOrg={'ООО Название'}/>
     <UserItem name={'шестой'} workOrg={'ООО Название'}/>
     <UserItem name={'седьмой'} workOrg={'ООО Название'}/>
     */
    render() {
        const { users } = this.state;
        console.log(this.props);
        console.log(users);
        let settings = {
            className: "center",
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            rtl: false,
            centerMode: true,
            focusOnSelect: true,
            pauseOnHover: false,
            centerPadding: "0px",
            autoplay: this.props.autoplay,
            speed: this.props.speed,
            autoplaySpeed: 0,
            cssEase: "linear",
            vertical: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return users.length > 0 && (
            <Slider  {...settings} ref={slider => (this.slider = slider)} >
                {users.map((user, index) => <UserItem key={index} {...user}/>)}
            </Slider>

        );
    }
}

