import Marquee from "react-fast-marquee";

export default function Scroller() {
    return (
        <>
            <section className="scroller">
                <div className="news-container bg-primary-red d-flex  z-10" style={{ height: "30px" }}>
                    <span className="d-flex align-items-center justify-content-center px-1 font-bold text-xl 2xl:p-3 text-white bg-danger w-[6%] " >सुचना</span>
                    <div className=" d-flex align-items-center text-white  text-lg  w-[94%] ms-auto " style={{ backgroundColor: "#3460b9" }}>
                        <Marquee>
                            <div className="child">
                                <span>यहि मिति:२०८०-०३-१८ मकालु गाउपालिकाको सार्वजनिक सुनुवाई कार्यक्रम भएको हुदाटोल बिकाश संस्था उपभोक्ता समिति र स्थानियलाई जानकारी गराई उपस्थित हुन अनुरोध छ                                                                           । </span>
                            </div>
                            <div className="mx-4">|</div>
                            <div className="child">
                                <span>मकालु गाउपालिका वार्ड नं ५  कार्यालय तथा गाउपालिकाका साखा कार्यालयले आफ्नो सेवा सुबिधाको बारेमा जानकारी दिने उदेश्यले यस कार्यालयमा बिद्युतिय सूचना पार्टी सञ्चालनमा ल्याएको ब्यहोरा जानकारी गराउदछौ</span>
                            </div>
                            <div className="mx-4">|</div>
                            <div className="child">
                                <span>केहि दिन अगाडि यस गाउपालिकाको फ्याक्सिन्दा दोभान अरुण तेस्रो परियोजना सञ्चालन भएको ठाउमा सुख्खा पहिरो गएर केहि समय अरुण नदि थुनिएर गहिरो पानिको सतह भनेको कारण नदिको तटिय क्षेत्रका नगरिकहरूको लागि दैनिकि असज हुनसक्ने कुरालाई ख्याल राख्दै आफु सुरक्षित रहि धनजनको क्षति हुनबाट जोगिन अनुरोध गर्दछौ </span>
                            </div>
                            <div className="mx-4">|</div>
                            <div className="child">
                                <span>तपाईको घर छिमेकमा बिवाह, जन्म, सम्वन्ध बिच्छेद, बसाइ सराई मृत्यु जस्ता घटना भएको भएसो को ३५ दिन भित्र  यस वडाकार्यालयमा जानकारी गराई सोको निस्सा लिनहुन अनुरोध गर्दछौ </span>
                            </div>
                            <div className="mx-4">|</div>
                        </Marquee>
                    </div>
                </div>
            </section>
        </>
    )
}