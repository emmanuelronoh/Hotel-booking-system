import React, { useContext, useEffect, useState } from 'react';
import defaultImg from '../assets/images/room-1.jpeg';
import Banner from '../components/Banner';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../store/context';
import StyledCover from '../components/StyledCover';
import { IRoomContext } from '../store/context'; // Import the IRoomContext interface

const SingleRoom: React.FC = () => {
    const { slug } = useParams<{ slug: string }>(); // Get the slug from the URL
    const context = useContext(RoomContext); // Access the context

    // State to store the room data
    const [room, setRoom] = useState<any>(null);

    // Fetch room data when the slug or context changes
    useEffect(() => {
        if (context && slug) {
            const roomData = context.getRoom(slug); // Fetch the room data
            setRoom(roomData);
        }
    }, [slug, context]);

    // Handle the case where context is null
    if (!context) {
        return (
            <div className="error">
                <h3>Error: Room context is not available.</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        );
    }

    // Handle the case where the room is not found
    if (!room) {
        return (
            <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        );
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [mainImg, ...defaultImg] = images;

    return (
        <React.Fragment>
            <StyledCover img={mainImg || defaultImg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledCover>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item: string, index: number) => (
                        <img key={index} src={item} alt={name} />
                    ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                        <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item: string, index: number) => (
                        <li key={index}>- {item}</li>
                    ))}
                </ul>
            </section>
        </React.Fragment>
    );
};

export default SingleRoom;