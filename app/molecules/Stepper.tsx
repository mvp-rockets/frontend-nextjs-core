import React from 'react';

interface StepProps {
    completed: boolean;
    isActive: boolean;
    name: string;
    step: number | string;
    onClick: () => void;
}

const Step: React.FC<StepProps> = ({ completed, isActive, name, step, onClick }) => {
    return (
        <>
            {!completed && !isActive && (
                <li className='w-fit'>
                    <div className="ml-2.5 flex w-full items-center">
                        <span className="flex items-center">
                            <div className='w-8 h-8 rounded-full flex items-center justify-center text-sm text-primary-900 border border-neutral-300' onClick={onClick}>
                                {step}
                            </div>
                        </span>
                    </div>
                    <span className='text-neutral-600 text-sm'>{name}</span>
                </li>
            )}

            {completed && !isActive && (
                <li className='w-full'>
                    <div className="ml-2.5 flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-900 after:border-1 after:inline-block">
                        <span className="flex items-center">
                            <div className='w-8 h-8 rounded-full flex items-center justify-center text-sm text-basic-white bg-primary-900' onClick={onClick}>
                                {step}
                            </div>
                        </span>
                    </div>
                    <span className='text-neutral-900 text-sm'>{name}</span>
                </li>
            )}

            {isActive && (
                <li className='w-full'>
                    <div className="ml-2.5 flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-neutral-300 after:border-1 after:inline-block">
                        <span className="flex items-center">
                            <div className='w-8 h-8 rounded-full flex items-center justify-center text-sm text-primary-900 border border-primary-900'>
                                {step}
                            </div>
                        </span>
                    </div>
                    <span className='text-primary-900 text-sm'>{name}</span>
                </li>
            )}
        </>
    );
};

interface StepperProps {
    steps: Array<{
        completed: boolean;
        isActive: boolean;
        name: string;
        step: number | string;
    }>;
    onClick?: () => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, onClick = () => {} }) => {
    return (
        <ol className="flex items-center w-full">
            {steps.map((item, index) => (
                <Step key={index} completed={item.completed} isActive={item.isActive} name={item.name} step={item.step} onClick={onClick} />
            ))}
        </ol>
    );
};

export default Stepper;
