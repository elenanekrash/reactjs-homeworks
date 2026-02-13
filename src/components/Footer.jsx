export default function Footer() {
    return (
        <footer className="bg-gray-100 px-12 py-12 mt-12">
            <div className="grid grid-cols-4 gap-6">

                <div>
                    <h4 className="font-bold">Company</h4>
                    <p>Home</p>
                    <p>Order</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h4 className="font-bold">Template</h4>

                    <a href="https://google.com">Style Guide</a><br/>
                    <a href="https://google.com">Changelog</a><br/>
                    <a href="https://google.com">Licence</a><br/>
                    <a href="https://google.com">Webflow University</a>

                </div>

                <div>
                    <h4 className="font-bold">Flowbase</h4>
                    <p>More Cloneables</p>
                </div>

            </div>
        </footer>
    );
}
