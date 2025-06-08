import { useState } from 'react';

const quickClarity = [
  {
    id: 'q1',
    stage: 1,
    title: "What’s Not Working?",
    prompt: "What part of your current path feels off or finished?",
    responses: [
      "I feel stuck in a job that doesn’t suit me",
      "I’ve lost interest, meaning, or even the job itself",
      "I need money, but I feel insecure or uncertain"
    ]
  },
  {
    id: 'q2',
    stage: 2,
    title: "What’s Pulling You Forward?",
    prompt: "If you could try something new without pressure, what would it be?",
    responses: [
      "I want to feel excited about work again",
      "I want to express myself more",
      "I want to help people in a different way"
    ]
  },
  {
    id: 'q3',
    stage: 3,
    title: "What’s the Next Step?",
    prompt: "What’s one small move that can shift things this week?",
    responses: [
      "Talk to someone I trust about this shift",
      "Explore 2–3 roles or paths I’ve been avoiding",
      "Make a list of what I do want in my next move"
    ]
  }
];

const deepMapping = [
  {
    id: 'd1',
    stage: 1,
    title: "Letting Go",
    prompt: "What am I being asked to release, even if I didn’t choose it?",
    responses: [
      "A role or identity I didn’t expect to lose",
      "A path I once relied on, but is no longer available",
      "A version of myself shaped by old expectations",
      "The belief that I need to have it all figured out right now"
    ]
  },
  {
    id: 'd2',
    stage: 2,
    title: "Discovering Desire",
    prompt: "If I wasn’t afraid, what would I let myself want?",
    responses: [
      "A career path that feels meaningful and sustainable",
      "Flexibility and autonomy in how I work",
      "A leadership role where I can truly be myself"
    ]
  },
  {
    id: 'd3',
    stage: 3,
    title: "Building Clarity",
    prompt: "Which option feels most like you, even if it’s a little scary? In other words — if all paths were safe, which one would you be most excited to try?",
    responses: [
      "A bold move I’ve been quietly daydreaming about",
      "Returning to a passion I paused years ago",
      "A career that aligns with how I naturally think and feel"
    ]
  },
  {
    id: 'd4',
    stage: 4,
    title: "Crafting Strategy",
    prompt: "What’s one step I could take today that my future self would thank me for?",
    responses: [
      "Reach out to someone who’s already made a similar shift",
      "Block 30 minutes this week to update my CV or reflect on my strengths",
      "Start a list of roles or paths I’d love to explore"
    ]
  },
  {
    id: 'd5',
    stage: 5,
    title: "Sustaining Momentum",
    prompt: "How can I stay true to myself as I move forward?",
    responses: [
      "Keep checking in with how opportunities feel, not just how they look on paper",
      "Set gentle boundaries to protect my energy during this shift",
      "Celebrate small steps, even when the big picture feels unclear"
    ]
  }
];

export default function SessionsUI() {
  const [journeySelected, setJourneySelected] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);

  if (!journeySelected) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Choose your journey</h2>
        <button onClick={() => {
          setSessions(quickClarity);
          setActiveSession(quickClarity[0]);
          setJourneySelected(true);
        }}>
          ✨ Quick Clarity (3 sessions)
        </button>
        <button onClick={() => {
          setSessions(deepMapping);
          setActiveSession(deepMapping[0]);
          setJourneySelected(true);
        }} style={{ marginLeft: '1rem' }}>
          🌌 Deep Mapping (5 sessions)
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Session Viewer (Coming Next)</h2>
      <p>We’ll show your selected session here shortly!</p>
    </div>
  );
}