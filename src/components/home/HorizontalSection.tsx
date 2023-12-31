import classNames from 'classnames';
import { Button } from '../commons';
import { useNavigate } from 'react-router-dom';
import routes from '../../config/routes';

interface Props {
    title: string;
    items: any[];
    [key: string]: any;
}

const HorizontalSection = (props: Props) => {
    const navigate = useNavigate();

    const handleRedirectToProducts = () => {
        navigate(routes.products);
    };
    return (
        <section className='flex items-center justify-center mb-[100px]'>
            <div className='w-primary'>
                <h2
                    className='text-center my-[100px] font-semibold
                 uppercase text-xs tracking-widest text-black/30'
                >
                    {props.title}
                </h2>
                <div className='flex-col flex lg:flex-row items-center justify-center gap-5'>
                    <div className='flex items-center justify-center order-2 lg:order-1'>
                        <div className='flex flex-col max-lg:text-center'>
                            <h3 className='tracking-widest text-black/40 font-semibold text-xs mb-5 mt-10 lg:mt-0'>
                                PREMIUM OFFER
                            </h3>
                            <h1 className='text-4xl font-medium'>
                                Get our Coffee Magazine
                            </h1>
                            <p className='text-black/50 mt-3.5 mb-5'>
                                The most versatile furniture system ever
                                created. Designed to fit your life.
                            </p>
                            <div className='mx-auto lg:mx-0'>
                                <Button
                                    size='medium'
                                    isDark
                                    fit
                                    onClick={handleRedirectToProducts}
                                >
                                    Start Shopping
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-2 gap-5 h-[280px] order-1 lg:order-2'>
                        {props.items.slice(0, 3).map((item, index) => (
                            <div
                                key={item.id}
                                className={classNames('', {
                                    'col-span-2 row-span-2': index === 0,
                                    'col-span-1 row-span-1': index !== 0,
                                })}
                            >
                                <img
                                    src={item.image}
                                    alt='product'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HorizontalSection;