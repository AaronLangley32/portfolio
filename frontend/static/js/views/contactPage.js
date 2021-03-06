import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("contactPage");
    }

    async getHtml() {
        return `
        <main class="page_container">
            <div id="aboutPage" class="page" style="display: flex; align-items: center; justify-content: center;">
                <div id="form_page_body" class="page_body">
                    <div class="form_container">
                        <div id="form_page_header" class="page_header">
                            <span>Shoot</span>
                            <span>Me</span>
                            <span>A</span>
                            <span>Message</span>
                        </div>
                        <div id="form_page_header2" class="page_header2">
                            <span>Or</span>
                            <span>Stalk</span>
                            <span>My</span>
                            <span>Socials</span>
                        </div>
                        <div class="form">
                            <form action="action_page.php">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                >
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                >
                                <textarea
                                    id="subject"
                                    name="subject"
                                    placeholder="Write something.."
                                    required
                                ></textarea>
                                <input
                                    id="submit_button"
                                    type="submit"
                                    value="Submit"
                                >
                            </form>
                        </div>            
                    </div>
                </div>
            </div>
        </main>
        `;
    }
}