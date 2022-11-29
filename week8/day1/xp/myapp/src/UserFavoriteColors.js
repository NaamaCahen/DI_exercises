function UserFavoriteColors(props) {
    const colors = props.fav_animals;
    console.log(colors);


    ///to amichai: I dont know why it's not working...
    colors.map((item) => {
        return (
            <>
            <li>item</li>
            </>
        )
    }

    )
}

export default UserFavoriteColors;