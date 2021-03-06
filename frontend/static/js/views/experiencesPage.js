import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("experiencesPage");
    }

    async getHtml() {
        return `
        <main class="page_container">
            <div id="aboutPage" class="page">
                <div class="page_header">
                    <span>Front</span>
                    <span>End</span>
                    <span>Web</span>
                    <span>Developer</span>
                </div>
                <div class="page_header2">
                    <span>Source</span>
                    <span>Engine</span>
                    <span>Level</span>
                    <span>Designer</span>
                </div>
                <div class="page_body">
                    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquid suscipit nesciunt eveniet debitis quas autem deleniti repellendus quidem nam, architecto hic eius provident porro unde, facilis temporibus enim molestiae. Illo dignissimos dolore, dolor odio libero praesentium neque repellat quo nobis cupiditate at, sint placeat. Illo distinctio dolore consectetur. Soluta, nemo adipisci! Esse ea officia modi alias, eos libero soluta, fuga facere sunt debitis ullam accusamus inventore, aliquam quasi labore? Atque rem alias accusamus illo blanditiis perferendis. Id ea nesciunt, quaerat incidunt illo ab voluptatem unde sequi eum doloribus hic impedit quibusdam. Ipsam, in sunt facere voluptas quo vel possimus.</p> -->
                    <div class="image_container">
                        <img 
                            src="../assets/face1.png"
                            onmouseover="this.src='../assets/angry.svg'"
                            onmouseout="this.src='../assets/face1.png'"
                            onclick="this.src='../assets/face2.png'"
                        >
                    </div>
                </div>
            </div>
        </main>
        `;
    }
}