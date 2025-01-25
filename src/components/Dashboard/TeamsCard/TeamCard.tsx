import { PrimaryButton } from "@/components/Shared/Button/Button";

const TeamCard = () => {
    return (
        <div className="bg-blue-50 border rounded-md border-dashed border-blue-500">
            <header className="flex justify-between items-center p-4 border-b">
                <h3>Docs</h3>
                <div>
                    <PrimaryButton type="button" onClick={() => console.log('add new')}>Add new</PrimaryButton>
                </div>
            </header>
            <section>
                <div className="grid grid-cols-1 gap-4 p-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h4>Getting started</h4>
                        <p>Learn how to get started with FlyonUI</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h4>Components</h4>
                        <p>Learn how to use FlyonUI components</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h4>API</h4>
                        <p>Learn how to use FlyonUI API</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TeamCard;