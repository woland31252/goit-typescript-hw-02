
export default interface imageCardProps {
    card: {
        alt_description: string;
        urls: {
            regular: string;
            small: string;
        };
        likes: number;
        user: {
            name: string;
            social: {
                instagram_username: string;
                twitter_username: string;
            };
        };
    };
    onClick: (regular: string, likes: number, name: string, instagram_username: string, twitter_username: string) => void;
    
}

