// src/data/LatencyThroughputQuestions.js

const latencyThroughputQuestions = [
    { question: "What is latency in networking?", answer: "The time it takes for a data packet to travel from source to destination." },
    { question: "What is throughput in networking?", answer: "The amount of data successfully transmitted over a given time frame." },
    { question: "Why is low latency important for online gaming?", answer: "It provides real-time interaction, which is critical for user experience." },
    { question: "What is the primary factor that affects latency?", answer: "Network distance and congestion." },
    { question: "How does high throughput benefit large data transfers?", answer: "It allows large amounts of data to be transmitted quickly." },
    { question: "Which application is more sensitive to high latency?", answer: "Video conferencing." },
    { question: "What is the main goal when optimizing for throughput?", answer: "Maximizing the amount of data transferred in a given time." },
    { question: "How do latency and throughput relate?", answer: "Latency measures delay, while throughput measures data transfer rate." },
    { question: "Which is more important for a live streaming service: latency or throughput?", answer: "Low latency to minimize delay." },
    { question: "What impact does high latency have on user experience?", answer: "It causes noticeable delays in data interaction, leading to poor user experience." },
    { question: "What is the primary unit for measuring latency?", answer: "Milliseconds (ms)." },
    { question: "What is the primary unit for measuring throughput?", answer: "Bits per second (bps)." },
    { question: "How does a CDN help reduce latency?", answer: "By storing data closer to the user, reducing travel time." },
    { question: "Why might a system have high throughput but also high latency?", answer: "The system can handle a lot of data, but delays in delivery make interactions slow." },
    { question: "What type of applications benefit most from high throughput?", answer: "Applications that transfer large files, like backups or video uploads." },
    { question: "What is the term for the delay caused by each hop in a network?", answer: "Propagation delay." },
    { question: "Can a network have low latency and low throughput?", answer: "Yes, if the data packets travel quickly but the data volume is low." },
    { question: "Which component of a network setup is most likely to contribute to high latency?", answer: "Routers or switches with long processing queues." },
    { question: "How can you reduce latency in a network?", answer: "By optimizing routing paths and reducing the number of hops." },
    { question: "Which type of communication requires both low latency and high throughput?", answer: "Video streaming in high definition." },
    { question: "What is a 'bottleneck' in terms of network throughput?", answer: "A point in the network that limits the rate of data transfer." },
    { question: "Which metric is more important for email delivery: latency or throughput?", answer: "Throughput, as timely delivery is less critical compared to the volume of data handled." },
    { question: "How does congestion in a network affect latency?", answer: "It increases latency as packets have to wait longer to be processed." },
    { question: "What type of traffic is most affected by high latency?", answer: "Interactive traffic like VoIP or gaming." },
    { question: "What is the impact of packet loss on throughput?", answer: "Packet loss reduces throughput as lost packets need to be retransmitted." },
    { question: "What role does bandwidth play in affecting throughput?", answer: "Higher bandwidth allows more data to be transmitted simultaneously, increasing throughput." },
    { question: "How can network buffers affect latency?", answer: "Buffers can cause higher latency if they introduce a queue of data waiting to be processed." },
    { question: "Why is it difficult to achieve both low latency and high throughput simultaneously?", answer: "Achieving high throughput often requires larger data blocks, which increases latency for individual packets." },
    { question: "What effect does latency have on TCP handshake performance?", answer: "Higher latency slows down the TCP handshake, delaying connection establishment." },
    { question: "What is the difference between goodput and throughput?", answer: "Goodput is the actual data received by the user, excluding overhead, while throughput includes all data transferred." },
  ];
  
  export default latencyThroughputQuestions;
  