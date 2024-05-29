export default interface modalProps {
    image: string;
    like: null|number;
    name: null|string;
    twit: null|string;
    insta: null|string;
    onOpen: boolean;
    onClose: () => void;
}