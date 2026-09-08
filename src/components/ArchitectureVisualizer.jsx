import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, RotateCcw, Cpu, Database, Server, Cloud, Zap, 
  CheckCircle2, Clock, Volume2, VolumeX, ShieldCheck, 
  Activity, AlertTriangle, Terminal, Sparkles, Sliders, 
  Layers, ArrowRight, CornerDownRight, X, Gauge,
  Gamepad2, Trophy, Flame, RefreshCw, Power, Radio,
  BarChart3, Check, AlertOctagon, HelpCircle
} from 'lucide-react';

export default function ArchitectureVisualizer() {
  const [activeTab, setActiveTab] = useState('topology'); // 'topology' | 'game'
  const [activeScenario, setActiveScenario] = useState('cache_hit'); 
  const [isRunning, setIsRunning] = useState(false);
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [activeEdgeId, setActiveEdgeId] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null); 
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [chaosMode, setChaosMode] = useState(false); 
  const [selectedSpan, setSelectedSpan] = useState(null);

  // --- Architect Survival Game States ---
  const [selectedCrisis, setSelectedCrisis] = useState('flash_sale'); // 'flash_sale' | 'db_exhaust' | 'ai_burst'
  const [gameConfig, setGameConfig] = useState({
    redisCache: true,
    dbPool: 50, // 15 | 50 | 100
    rateLimiter: 'strict', // 'strict' | 'permissive' | 'off'
    computeWorker: 'lambda' // 'lambda' | 'direct'
  });
  const [gameRunning, setGameRunning] = useState(false);
  const [gameResult, setGameResult] = useState(null); // null | { passed: boolean, uptime, latency, score, diagnosis }

  const [metrics, setMetrics] = useState({
    latency: '1.8ms',
    p99: '3.2ms',
    throughput: '4,850 req/s',
    cacheHitRate: '94.2%',
    status: 'SYSTEM HEALTHY'
  });

  const [logs, setLogs] = useState([
    { time: 'INIT', text: 'Telemetry initialized. Ready for topology packet tracing & architect game.', type: 'info' }
  ]);

  // Web Audio Synthesizer (Native Web Audio API)
  const playSound = (freq = 520, type = 'sine', duration = 0.08, vol = 0.03) => {
    if (!audioEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  };

  // Node specifications with architectural code snippets
  const nodes = [
    {
      id: 'client',
      label: 'React Client',
      sublabel: 'SPA Frontend',
      type: 'Client Runtime',
      icon: Cloud,
      color: '#38BDF8',
      role: 'Dispatches signed requests, handles optimistic UI state updates & render caching.',
      specs: {
        runtime: 'React 18 + Vite',
        protocol: 'HTTP/2 • TLS 1.3',
        stateEngine: 'Zustand / TanStack Query',
        cacheStrategy: 'Stale-While-Revalidate'
      },
      codeSnippet: `// React Query Client with optimistic cache updates
const { data, isLoading } = useQuery({
  queryKey: ['products', productId],
  queryFn: () => api.get(\`/api/v1/products/\${productId}\`),
  staleTime: 1000 * 60 * 5, // 5 min client cache
});`
    },
    {
      id: 'gateway',
      label: 'API Gateway',
      sublabel: 'Edge Proxy & WAF',
      type: 'Edge Security',
      icon: Zap,
      color: '#F59E0B',
      role: 'Enforces rate limits, validates cryptographic JWT bearer tokens & sanitizes payloads.',
      specs: {
        layer: 'Reverse Proxy & Edge WAF',
        rateLimit: '1,000 req/min per IP',
        crypto: 'RS256 Signature Verification',
        compression: 'Brotli / Gzip'
      },
      codeSnippet: `// Edge Rate Limiter (Token Bucket Algorithm)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1000, // 1000 req per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "429 Too Many Requests" }
});`
    },
    {
      id: 'node',
      label: 'Node.js Core',
      sublabel: 'Express Microservice',
      type: 'Compute Engine',
      icon: Server,
      color: '#10B981',
      role: 'Non-blocking event loop orchestrating business logic, cache lookups & worker queues.',
      specs: {
        runtime: 'Node.js v22.12 LTS',
        framework: 'Express.js + Async Middleware',
        concurrency: 'Single-thread Non-blocking Loop',
        clustering: 'PM2 4-core worker cluster'
      },
      codeSnippet: `// Controller with Redis Cache-Aside & DB Fallback
async function getProduct(req, res) {
  const { id } = req.params;
  const cached = await redis.get(\`prod:\${id}\`);
  if (cached) return res.json(JSON.parse(cached));
  
  const product = await db.query('SELECT * FROM products WHERE id = $1', [id]);
  await redis.setex(\`prod:\${id}\`, 3600, JSON.stringify(product.rows[0]));
  return res.json(product.rows[0]);
}`
    },
    {
      id: 'redis',
      label: 'Redis Cache',
      sublabel: 'In-Memory Tier',
      type: 'Sub-Millisecond Tier',
      icon: Cpu,
      color: '#EF4444',
      role: 'In-memory key-value store and BullMQ job queues preventing database overload.',
      specs: {
        version: 'Redis v7.2 Enterprise',
        dataStructures: 'Hashes, Sets, BullMQ Queues',
        evictionPolicy: 'volatile-lru',
        persistence: 'AOF + RDB Snapshots'
      },
      codeSnippet: `// Redis BullMQ Async Job Producer (WebMantis)
import { Queue } from 'bullmq';
const aiQueue = new Queue('ai-eval-queue', { connection: redisConfig });

await aiQueue.add('evaluate-prompt', {
  templateId: 'arch_v1',
  timestamp: Date.now()
}, { removeOnComplete: true, attempts: 3 });`
    },
    {
      id: 'db',
      label: 'PostgreSQL DB',
      sublabel: 'Relational ACID Engine',
      type: 'Persistent Storage',
      icon: Database,
      color: '#6366F1',
      role: 'Source of truth for relational transactions, foreign keys, row locks and audit logs.',
      specs: {
        engine: 'PostgreSQL 16 Engine',
        isolation: 'READ COMMITTED',
        indexing: 'B-Tree & GIN (JSONB)',
        pooler: 'PgBouncer (Max 50 conns)'
      },
      codeSnippet: `// Strict ACID Multi-Table Transaction (Cuboid Platform)
const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query('INSERT INTO orders (user_id, total) VALUES ($1, $2)', [uid, sum]);
  await client.query('UPDATE accounts SET balance = balance - $1 WHERE id = $2', [sum, uid]);
  await client.query('COMMIT');
} catch (e) {
  await client.query('ROLLBACK');
  throw e;
} finally { client.release(); }`
    },
    {
      id: 'lambda',
      label: 'AWS Lambda',
      sublabel: 'Serverless Worker',
      type: 'Async AI Worker',
      icon: Cloud,
      color: '#EC4899',
      role: 'Serverless ephemeral workers executing heavy LLM prompt evaluation and background jobs.',
      specs: {
        platform: 'AWS Lambda + Node.js 20',
        memory: '512 MB ARM64 Graviton3',
        coldStartTime: '<45ms',
        queueConsumer: 'Redis BullMQ Dispatcher'
      },
      codeSnippet: `// AWS Lambda Serverless Worker Function
export const handler = async (event) => {
  const { prompt, model } = JSON.parse(event.body);
  const result = await evaluatePromptWithSafeguards(prompt);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "success", tokens: result.tokenCount })
  };
};`
    }
  ];

  // Scenarios with detailed OpenTelemetry Waterfall Spans
  const scenarios = [
    {
      id: 'cache_hit',
      badge: 'SPEED TEST',
      title: '01 // REDIS CACHE HIT',
      desc: 'Sub-2ms in-memory cache hit bypassing primary database disk reads.',
      expectedLatency: '1.8ms',
      expectedThroughput: '4,850 req/s',
      path: [
        { node: 'client', edge: 'edge-client-gw', msg: 'Client dispatches GET /api/v1/products/8941' },
        { node: 'gateway', edge: 'edge-gw-node', msg: 'Edge Gateway validates JWT bearer token in 0.4ms' },
        { node: 'node', edge: 'edge-node-redis', msg: 'Node.js Express queries Redis key "cache:prod:8941"' },
        { node: 'redis', edge: 'edge-redis-node', msg: '⚡ CACHE HIT: Payload returned from memory in 0.5ms' },
        { node: 'node', edge: 'edge-node-client', msg: 'Node.js writes HTTP/2 200 OK stream to client' },
        { node: 'client', edge: null, msg: '✓ Complete roundtrip delivered to client in 1.8ms.' }
      ],
      spans: [
        { name: 'GET /api/v1/products/8941', service: 'Client', duration: '1.8ms', width: '100%', offset: '0%', color: '#38BDF8', status: '200' },
        { name: 'Gateway: JWT Auth & Rate Limit', service: 'API Gateway', duration: '0.4ms', width: '22%', offset: '10%', color: '#F59E0B', status: 'OK' },
        { name: 'Express: Controller Execution', service: 'Node.js', duration: '0.3ms', width: '16%', offset: '32%', color: '#10B981', status: 'OK' },
        { name: 'Redis: GET cache:prod:8941', service: 'Redis Cache', duration: '0.5ms', width: '28%', offset: '48%', color: '#EF4444', status: 'HIT' },
        { name: 'Response Delivery & Decompression', service: 'Client', duration: '0.6ms', width: '33%', offset: '67%', color: '#38BDF8', status: 'OK' }
      ]
    },
    {
      id: 'cache_miss',
      badge: 'CACHE MISS & HYDRATION',
      title: '02 // CACHE MISS ➔ DB FALLBACK',
      desc: 'Cache missed. Queries PostgreSQL disk with B-Tree index, then hydrates Redis for subsequent reads.',
      expectedLatency: '24.6ms',
      expectedThroughput: '920 req/s',
      path: [
        { node: 'client', edge: 'edge-client-gw', msg: 'Client dispatches GET /api/v1/analytics/report' },
        { node: 'gateway', edge: 'edge-gw-node', msg: 'Gateway passes through to Node.js backend' },
        { node: 'node', edge: 'edge-node-redis', msg: 'Node.js checks Redis key "report:2026"' },
        { node: 'redis', edge: 'edge-node-db', msg: '⚠️ CACHE MISS: Key not found in RAM. Invoking DB fallback.' },
        { node: 'db', edge: 'edge-db-node', msg: 'PostgreSQL executes indexed B-tree scan (18.2ms)' },
        { node: 'node', edge: 'edge-node-redis', msg: 'Node.js writes-through fetched payload to Redis (1hr TTL)' },
        { node: 'client', edge: null, msg: '✓ 200 OK: Data delivered & cache warmed (24.6ms).' }
      ],
      spans: [
        { name: 'GET /api/v1/analytics/report', service: 'Client', duration: '24.6ms', width: '100%', offset: '0%', color: '#38BDF8', status: '200' },
        { name: 'Gateway: Reverse Proxy Auth', service: 'API Gateway', duration: '0.6ms', width: '8%', offset: '3%', color: '#F59E0B', status: 'OK' },
        { name: 'Redis: GET report:2026', service: 'Redis Cache', duration: '0.6ms', width: '8%', offset: '11%', color: '#EF4444', status: 'MISS' },
        { name: 'PostgreSQL: B-Tree Index Scan', service: 'PostgreSQL', duration: '18.2ms', width: '74%', offset: '19%', color: '#6366F1', status: 'OK' },
        { name: 'Redis: SETEX report:2026 3600', service: 'Redis Cache', duration: '1.2ms', width: '10%', offset: '85%', color: '#EF4444', status: 'OK' }
      ]
    },
    {
      id: 'db_write',
      badge: 'ACID TRANSACTION',
      title: '03 // POSTGRESQL ACID TRANSACTION',
      desc: 'Executes BEGIN...COMMIT multi-table transaction with strict locks, followed by cache invalidation.',
      expectedLatency: '38.4ms',
      expectedThroughput: '680 req/s',
      path: [
        { node: 'client', edge: 'edge-client-gw', msg: 'Client dispatches POST /api/v1/orders' },
        { node: 'gateway', edge: 'edge-gw-node', msg: 'Payload schema validated against OpenAPI contract' },
        { node: 'node', edge: 'edge-node-db', msg: 'Node.js begins BEGIN PostgreSQL transaction' },
        { node: 'db', edge: 'edge-db-node', msg: 'Rows inserted with foreign key checks & committed' },
        { node: 'node', edge: 'edge-node-redis', msg: 'Redis invalidates stale cache key "order:user:12"' },
        { node: 'client', edge: null, msg: '✓ 201 Created: Transaction committed in 38.4ms.' }
      ],
      spans: [
        { name: 'POST /api/v1/orders', service: 'Client', duration: '38.4ms', width: '100%', offset: '0%', color: '#38BDF8', status: '201' },
        { name: 'Gateway: Schema Validation', service: 'API Gateway', duration: '0.8ms', width: '6%', offset: '2%', color: '#F59E0B', status: 'OK' },
        { name: 'Node.js: BEGIN Transaction', service: 'Node.js', duration: '1.1ms', width: '8%', offset: '8%', color: '#10B981', status: 'OK' },
        { name: 'PostgreSQL: INSERT + COMMIT Locks', service: 'PostgreSQL', duration: '32.4ms', width: '78%', offset: '16%', color: '#6366F1', status: 'COMMIT' },
        { name: 'Redis: DEL order:user:12 (Invalidate)', service: 'Redis Cache', duration: '0.9ms', width: '7%', offset: '90%', color: '#EF4444', status: 'OK' }
      ]
    },
    {
      id: 'ai_queue',
      badge: 'ASYNC WORKER',
      title: '04 // ASYNC AI PROMPT PIPELINE',
      desc: 'Offloads heavy LLM token inference via BullMQ queues to AWS Lambda serverless workers.',
      expectedLatency: '14.2ms (Queued)',
      expectedThroughput: '2,600 req/s',
      path: [
        { node: 'client', edge: 'edge-client-gw', msg: 'Client dispatches POST /api/v1/ai/prompt-eval' },
        { node: 'gateway', edge: 'edge-gw-node', msg: 'Gateway authorizes job dispatch' },
        { node: 'node', edge: 'edge-node-redis', msg: 'Node.js pushes job to Redis BullMQ queue' },
        { node: 'redis', edge: 'edge-node-lambda', msg: 'Queue event triggers AWS Lambda serverless execution' },
        { node: 'lambda', edge: 'edge-lambda-node', msg: 'Lambda completes LLM token processing in 140ms' },
        { node: 'client', edge: null, msg: '✓ 202 Accepted: Asynchronous job pipeline completed (14.2ms).' }
      ],
      spans: [
        { name: 'POST /api/v1/ai/prompt-eval', service: 'Client', duration: '14.2ms', width: '100%', offset: '0%', color: '#38BDF8', status: '202' },
        { name: 'Gateway: Authorize Job', service: 'API Gateway', duration: '0.5ms', width: '12%', offset: '4%', color: '#F59E0B', status: 'OK' },
        { name: 'BullMQ: Push Job #4928 to Redis', service: 'Redis Cache', duration: '1.4ms', width: '22%', offset: '16%', color: '#EF4444', status: 'ENQUEUED' },
        { name: 'Client ACK: Job Accepted for Processing', service: 'Client', duration: '1.1ms', width: '18%', offset: '38%', color: '#38BDF8', status: '202' },
        { name: 'AWS Lambda: Ephemeral Worker Execution', service: 'AWS Lambda', duration: '140ms (Async)', width: '60%', offset: '56%', color: '#EC4899', status: 'ASYNC' }
      ]
    }
  ];

  const currentScenario = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  // Run Scenario Simulation with animated laser progression
  const runSimulation = () => {
    if (isRunning || gameRunning) return;
    setIsRunning(true);
    setLogs([]);
    setActiveNodeId(null);
    setActiveEdgeId(null);

    const steps = currentScenario.path;
    let index = 0;

    playSound(600, 'triangle', 0.1, 0.05);

    const interval = setInterval(() => {
      if (index < steps.length) {
        const step = steps[index];
        setActiveNodeId(step.node);
        setActiveEdgeId(step.edge);

        playSound(440 + index * 95, 'sine', 0.07, 0.04);

        setLogs(prev => [
          ...prev, 
          { 
            time: new Date().toLocaleTimeString(), 
            text: step.msg,
            type: step.msg.includes('HIT') ? 'success' : step.msg.includes('MISS') ? 'warning' : 'info'
          }
        ]);

        index++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setActiveEdgeId(null);
        playSound(880, 'sine', 0.15, 0.05);

        const latencyNum = chaosMode 
          ? (parseFloat(currentScenario.expectedLatency) + 120).toFixed(1) + 'ms'
          : currentScenario.expectedLatency;

        setMetrics({
          latency: latencyNum,
          p99: (parseFloat(latencyNum) * 1.5).toFixed(1) + 'ms',
          throughput: currentScenario.expectedThroughput,
          cacheHitRate: activeScenario === 'cache_miss' ? '65.2%' : '94.2%',
          status: 'TRANSMISSION COMPLETE'
        });
      }
    }, chaosMode ? 900 : 560);
  };

  // --- Architect Survival Game Simulation Engine ---
  const runArchitectGame = () => {
    if (gameRunning) return;
    setGameRunning(true);
    setGameResult(null);
    setLogs([
      { time: new Date().toLocaleTimeString(), text: `🚨 SURGE TRIGGERED: Injecting 50,000 req/s into your architecture...`, type: 'warning' }
    ]);

    playSound(380, 'sawtooth', 0.2, 0.04);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      playSound(400 + progress * 8, 'sine', 0.06, 0.03);

      if (progress >= 100) {
        clearInterval(interval);
        setGameRunning(false);

        // Evaluate architectural configuration against chosen crisis
        if (selectedCrisis === 'flash_sale') {
          if (!gameConfig.redisCache) {
            // Failure: Redis was OFF during 50K flash sale!
            playSound(220, 'sawtooth', 0.4, 0.08);
            setGameResult({
              passed: false,
              uptime: '38.2%',
              latency: '4,850ms',
              status: 'DATABASE LOCK CONTENTION // 504 GATEWAY TIMEOUT',
              score: '42 / 100',
              diagnosis: 'Database CPU reached 100% under 50,000 un-cached read requests. Disabling Redis forced all traffic to PostgreSQL disk seek, exhausting connection pools.',
              recommendation: 'Enable Redis in-memory cache to absorb 92%+ of repetitive read operations.'
            });
            setLogs(prev => [
              ...prev,
              { time: new Date().toLocaleTimeString(), text: '❌ OUTAGE: PostgreSQL connection pool exhausted (504 Gateway Timeout).', type: 'warning' }
            ]);
          } else if (gameConfig.rateLimiter === 'off') {
            // Partial Failure: Rate Limiter OFF allowed DDoS exhaustion
            playSound(300, 'square', 0.3, 0.05);
            setGameResult({
              passed: false,
              uptime: '74.5%',
              latency: '820ms',
              status: 'EDGE EXHAUSTION // DDOS DEGRADED',
              score: '68 / 100',
              diagnosis: 'Without edge rate limiting, rogue scrapers saturated network bandwidth before requests reached the application layer.',
              recommendation: 'Enable Strict Token Bucket Rate Limiting at the API Gateway.'
            });
          } else {
            // Triumph: Optimal architecture!
            playSound(880, 'sine', 0.3, 0.07);
            setGameResult({
              passed: true,
              uptime: '99.99%',
              latency: '3.4ms',
              status: '🏆 SENIOR ARCHITECT RANK // ZERO DOWNTIME ACHIEVED',
              score: '98 / 100',
              diagnosis: 'Redis absorbed 94.2% of read queries in memory (<1ms). The API Gateway throttled malicious spikes, while PostgreSQL smoothly handled transactional order commits.',
              recommendation: 'Production-ready architecture: Verified for tier-1 enterprise scale.'
            });
            setLogs(prev => [
              ...prev,
              { time: new Date().toLocaleTimeString(), text: '✓ 99.99% UPTIME ACHIEVED: 50,000 req/s absorbed with zero dropped packets.', type: 'success' }
            ]);
          }
        } else if (selectedCrisis === 'db_exhaust') {
          if (gameConfig.dbPool < 50) {
            playSound(220, 'sawtooth', 0.3, 0.06);
            setGameResult({
              passed: false,
              uptime: '52.1%',
              latency: '2,400ms',
              status: 'POOL STARVATION // CONNECTION TIMEOUT',
              score: '54 / 100',
              diagnosis: 'A 15-connection pool was too small for concurrent analytical queries, causing incoming requests to queue in memory until HTTP sockets timed out.',
              recommendation: 'Increase connection pool to 50+ with PgBouncer transaction-mode pooling.'
            });
          } else {
            playSound(880, 'sine', 0.3, 0.07);
            setGameResult({
              passed: true,
              uptime: '99.95%',
              latency: '14.8ms',
              status: '🏆 SENIOR ARCHITECT RANK // ACID CONSISTENT',
              score: '96 / 100',
              diagnosis: 'PgBouncer connection pooler gracefully queued and executed all concurrent transactional queries without lock contention.',
              recommendation: 'Optimal database pool configuration.'
            });
          }
        } else if (selectedCrisis === 'ai_burst') {
          if (gameConfig.computeWorker === 'direct') {
            playSound(220, 'sawtooth', 0.3, 0.06);
            setGameResult({
              passed: false,
              uptime: '45.0%',
              latency: '3,800ms',
              status: 'EVENT LOOP BLOCK // CPU SATURATED',
              score: '48 / 100',
              diagnosis: 'Processing heavy LLM token inference synchronously on the main Node.js web server completely blocked the event loop for all incoming users.',
              recommendation: 'Offload long-running AI inference to asynchronous AWS Lambda workers via Redis BullMQ queues.'
            });
          } else {
            playSound(880, 'sine', 0.3, 0.07);
            setGameResult({
              passed: true,
              uptime: '99.99%',
              latency: '8.2ms (Queue Ack)',
              status: '🏆 SENIOR ARCHITECT RANK // SERVERLESS OFFLOAD SUCCESS',
              score: '99 / 100',
              diagnosis: 'BullMQ pushed 10,000 prompt jobs into Redis in 8ms, while ephemeral AWS Lambda workers scaled horizontally to process inference in parallel.',
              recommendation: 'Elite event-driven serverless design.'
            });
          }
        }
      }
    }, 150);
  };

  useEffect(() => {
    setLogs([
      { time: new Date().toLocaleTimeString(), text: `Loaded scenario: ${currentScenario.title}. Press "RUN PACKET TRACE" to observe.`, type: 'info' }
    ]);
    setMetrics({
      latency: currentScenario.expectedLatency,
      p99: (parseFloat(currentScenario.expectedLatency) * 1.5).toFixed(1) + 'ms',
      throughput: currentScenario.expectedThroughput,
      cacheHitRate: '94.2%',
      status: 'STANDBY'
    });
    setActiveNodeId(null);
    setActiveEdgeId(null);
  }, [activeScenario]);

  return (
    <section id="architecture" className="relative z-10 px-6 sm:px-10 md:px-14 py-28 border-t border-white/10 bg-[#07080b]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#B4A06E]/20 text-[#B4A06E] border border-[#B4A06E]/40">
                02 // SYSTEM DESIGN LAB
              </span>
              <span className="text-xs font-mono text-neutral-400">
                Interactive Topology &amp; Architect Sandbox
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-white">
              SYSTEM ARCHITECTURE LAB
            </h2>
          </div>
          
          <div className="mt-4 lg:mt-0 flex flex-wrap items-center gap-3">
            {/* Mode Switcher Tabs */}
            <div className="flex items-center bg-[#0d0f16] p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setActiveTab('topology')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'topology'
                    ? 'bg-[#B4A06E] text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>TOPOLOGY &amp; TRACING</span>
              </button>
              <button
                onClick={() => setActiveTab('game')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'game'
                    ? 'bg-[#B4A06E] text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>ARCHITECT GAME 🎮</span>
              </button>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className={`px-3 py-2 rounded-xl text-xs font-mono border transition-all flex items-center gap-1.5 ${
                audioEnabled 
                  ? 'bg-[#B4A06E]/20 border-[#B4A06E] text-[#B4A06E]' 
                  : 'bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white'
              }`}
              title={audioEnabled ? "Sound enabled" : "Sound muted"}
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{audioEnabled ? "SFX: ON" : "SFX: OFF"}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TOPOLOGY & DISTRIBUTED TRACING */}
        {activeTab === 'topology' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* 4 Interactive Scenario Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {scenarios.map((sc) => {
                const isSelected = activeScenario === sc.id;
                return (
                  <button
                    key={sc.id}
                    onClick={() => {
                      if (!isRunning) setActiveScenario(sc.id);
                    }}
                    disabled={isRunning}
                    className={`p-5 text-left border rounded-2xl transition-all relative overflow-hidden group ${
                      isSelected
                        ? 'bg-[#121522] border-[#B4A06E] shadow-xl shadow-[#B4A06E]/10'
                        : 'bg-[#0a0c12] border-white/10 hover:border-white/30 text-neutral-400'
                    } disabled:opacity-50`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#B4A06E]" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#B4A06E]/20 text-[#B4A06E]' : 'bg-white/5 text-neutral-400'
                      }`}>
                        {sc.badge}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">~{sc.expectedLatency}</span>
                    </div>

                    <h3 className="text-sm font-mono font-medium text-white mb-1 group-hover:text-[#B4A06E] transition-colors">
                      {sc.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2">
                      {sc.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Visualizer Stage Container */}
            <div className="bg-[#090b10] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
              
              {/* Top Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={runSimulation}
                    disabled={isRunning}
                    className="px-6 py-3 bg-[#B4A06E] hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#B4A06E]/20 active:scale-95 disabled:opacity-50 rounded-xl"
                  >
                    {isRunning ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                        <span>TRACING PACKET...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-black" />
                        <span>RUN PACKET TRACE</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setChaosMode(!chaosMode)}
                    className={`px-4 py-3 rounded-xl text-xs font-mono border transition-all flex items-center gap-1.5 ${
                      chaosMode 
                        ? 'bg-amber-500/20 border-amber-500 text-amber-400' 
                        : 'bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white'
                    }`}
                    title="Simulates network jitter"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{chaosMode ? "CHAOS: ACTIVE (+120ms)" : "INJECT JITTER"}</span>
                  </button>

                  <button
                    onClick={() => {
                      setLogs([{ time: new Date().toLocaleTimeString(), text: 'Pipeline reset.', type: 'info' }]);
                      setActiveNodeId(null);
                      setActiveEdgeId(null);
                    }}
                    disabled={isRunning}
                    className="p-3 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-colors rounded-xl"
                    title="Reset simulation state"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                {/* Telemetry Chips */}
                <div className="flex items-center gap-6 font-mono text-xs">
                  <div>
                    <span className="text-neutral-500 block text-[10px]">ROUNDTRIP</span>
                    <span className="text-[#B4A06E] font-bold text-sm">{metrics.latency}</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-neutral-500 block text-[10px]">P99 LATENCY</span>
                    <span className="text-white font-semibold">{metrics.p99}</span>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-neutral-500 block text-[10px]">THROUGHPUT</span>
                    <span className="text-neutral-300 font-semibold">{metrics.throughput}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[10px]">CACHE HIT</span>
                    <span className="text-emerald-400 font-bold">{metrics.cacheHitRate}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Topology Graph with Nodes */}
              <div className="relative">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                  {nodes.map((node) => {
                    const Icon = node.icon;
                    const isActive = activeNodeId === node.id;
                    const isInspecting = selectedNode?.id === node.id;

                    return (
                      <div
                        key={node.id}
                        onClick={() => {
                          setSelectedNode(node);
                          playSound(700, 'triangle', 0.05, 0.03);
                        }}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col items-center justify-between text-center relative select-none min-h-[195px] ${
                          isActive
                            ? 'bg-[#B4A06E]/20 border-[#B4A06E] scale-105 shadow-2xl shadow-[#B4A06E]/20'
                            : isInspecting
                            ? 'bg-[#151928] border-white/60 shadow-xl'
                            : 'bg-[#0d0f16] border-white/10 hover:border-[#B4A06E]/50 hover:bg-[#11131c]'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute top-2.5 right-2.5 flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B4A06E] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B4A06E]" />
                          </span>
                        )}

                        <div className={`p-3.5 rounded-2xl mb-3 transition-colors ${
                          isActive 
                            ? 'bg-[#B4A06E] text-black shadow-lg shadow-[#B4A06E]/40' 
                            : 'bg-white/[0.04] text-neutral-300'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>

                        <div>
                          <span className="text-xs font-mono text-white font-medium block">
                            {node.label}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
                            {node.sublabel}
                          </span>
                        </div>

                        <div className="mt-3 w-full pt-2 border-t border-white/5 flex items-center justify-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                            {isActive ? 'Processing' : 'Click to Inspect'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Distributed Flamegraph (OpenTelemetry / Datadog Waterfall) */}
              <div className="bg-[#06070a] border border-white/10 rounded-2xl p-5 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/5 text-neutral-400 text-[11px]">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-3.5 h-3.5 text-[#B4A06E]" />
                    <span>DISTRIBUTED REQUEST TRACE // WATERFALL SPANS</span>
                  </span>
                  <span className="text-neutral-500 text-[10px]">OpenTelemetry Trace ID: 4bf92f3577b34da6</span>
                </div>

                {/* Flamegraph Waterfall Rows */}
                <div className="space-y-2.5 pt-1">
                  {currentScenario.spans.map((span, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-neutral-300 font-medium truncate max-w-xs sm:max-w-md">
                          {span.name}
                        </span>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-neutral-400 font-mono">
                            {span.service}
                          </span>
                          <span className="text-[#B4A06E] font-semibold">{span.duration}</span>
                        </div>
                      </div>

                      {/* Visual Span Bar */}
                      <div className="w-full bg-white/[0.04] h-2.5 rounded-full overflow-hidden relative">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: span.width,
                            marginLeft: span.offset,
                            backgroundColor: span.color
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Node Inspector Modal / Flyout HUD (When user clicks any node!) */}
              {selectedNode && (
                <div className="p-6 bg-[#0f121b] border border-[#B4A06E]/40 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 relative">
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Close Inspector"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#B4A06E]/20 text-[#B4A06E] border border-[#B4A06E]/40 shrink-0">
                      <selectedNode.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-mono font-medium text-white">{selectedNode.label}</h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-neutral-300">
                          {selectedNode.type}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-300 font-light mt-1 max-w-2xl leading-relaxed">
                        {selectedNode.role}
                      </p>
                    </div>
                  </div>

                  {/* Deep Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 mb-4 border-t border-white/10 text-xs font-mono">
                    {Object.entries(selectedNode.specs).map(([key, val]) => (
                      <div key={key} className="p-3 bg-[#08090d] border border-white/5 rounded-xl">
                        <span className="text-neutral-500 block text-[10px] uppercase">{key}</span>
                        <span className="text-neutral-200 font-medium">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Production Code Snippet */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#B4A06E] uppercase tracking-wider block mb-2">
                      Production Engineering Snippet:
                    </span>
                    <pre className="p-3.5 bg-[#06070a] border border-white/10 rounded-xl text-neutral-300 text-[11px] font-mono overflow-x-auto leading-relaxed">
                      {selectedNode.codeSnippet}
                    </pre>
                  </div>
                </div>
              )}

              {/* Telemetry Console */}
              <div className="bg-[#06070a] border border-white/[0.08] rounded-2xl p-4 sm:p-5 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between pb-3 border-b border-white/5 text-neutral-500 text-[11px]">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#B4A06E]" />
                    <span>SYSTEM EXECUTION STREAM</span>
                  </span>
                  <span className="text-neutral-400 text-[10px]">TLS 1.3 • MUTUAL AUTH</span>
                </div>

                <div className="max-h-32 overflow-y-auto space-y-2 pt-1 text-neutral-300 pr-2">
                  {logs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-neutral-600 shrink-0 text-[11px]">[{log.time}]</span>
                      <span className={`shrink-0 font-bold ${
                        log.type === 'success' ? 'text-emerald-400' : log.type === 'warning' ? 'text-amber-400' : 'text-[#B4A06E]'
                      }`}>
                        {log.type === 'success' ? '✓' : log.type === 'warning' ? '⚡' : '▹'}
                      </span>
                      <span className={`${
                        log.type === 'success' ? 'text-emerald-300' : log.type === 'warning' ? 'text-amber-200' : 'text-neutral-300'
                      }`}>
                        {log.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: ARCHITECT SURVIVAL GAME 🎮 */}
        {activeTab === 'game' && (
          <div className="bg-[#090b10] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
            
            {/* Game Intro Banner */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B4A06E] flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  ARCHITECT SURVIVAL CHALLENGE // CAN YOUR STACK SURVIVE?
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white mt-1">
                  PRODUCTION TRAFFIC SIMULATOR
                </h3>
              </div>
              <div className="text-xs font-mono text-neutral-400 max-w-sm font-light">
                Configure your caching, connection pools, and worker layers, then launch a 50,000 req/s stress surge to see if your system stays up.
              </div>
            </div>

            {/* Crisis Selection */}
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                1. Select Crisis Scenario:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedCrisis('flash_sale')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedCrisis === 'flash_sale'
                      ? 'bg-[#151928] border-[#B4A06E] text-white'
                      : 'bg-[#0c0e14] border-white/10 text-neutral-400 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#B4A06E]">CRISIS #01</span>
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">50K Flash Sale Spike</h4>
                  <p className="text-xs text-neutral-400 font-light">
                    Huge flood of repetitive product and inventory reads hitting the frontend.
                  </p>
                </button>

                <button
                  onClick={() => setSelectedCrisis('db_exhaust')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedCrisis === 'db_exhaust'
                      ? 'bg-[#151928] border-[#B4A06E] text-white'
                      : 'bg-[#0c0e14] border-white/10 text-neutral-400 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#B4A06E]">CRISIS #02</span>
                    <Database className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">Database Pool Storm</h4>
                  <p className="text-xs text-neutral-400 font-light">
                    Concurrent complex relational transactions competing for database connections.
                  </p>
                </button>

                <button
                  onClick={() => setSelectedCrisis('ai_burst')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedCrisis === 'ai_burst'
                      ? 'bg-[#151928] border-[#B4A06E] text-white'
                      : 'bg-[#0c0e14] border-white/10 text-neutral-400 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#B4A06E]">CRISIS #03</span>
                    <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">GenAI Token Ingestion Burst</h4>
                  <p className="text-xs text-neutral-400 font-light">
                    10,000 users dispatching heavy multi-token LLM prompt evaluations at once.
                  </p>
                </button>
              </div>
            </div>

            {/* Architecture Control Levers */}
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                2. Tune Your System Levers:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Lever 1: Redis Caching */}
                <div className="p-4 bg-[#0c0e14] border border-white/10 rounded-xl space-y-2">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase block">In-Memory Cache</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setGameConfig({ ...gameConfig, redisCache: true })}
                      className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                        gameConfig.redisCache ? 'bg-[#B4A06E] text-black' : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      REDIS ON
                    </button>
                    <button
                      onClick={() => setGameConfig({ ...gameConfig, redisCache: false })}
                      className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                        !gameConfig.redisCache ? 'bg-red-500 text-white' : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      OFF
                    </button>
                  </div>
                </div>

                {/* Lever 2: Edge Rate Limiter */}
                <div className="p-4 bg-[#0c0e14] border border-white/10 rounded-xl space-y-2">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase block">Gateway Rate Limiter</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setGameConfig({ ...gameConfig, rateLimiter: 'strict' })}
                      className={`flex-1 py-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                        gameConfig.rateLimiter === 'strict' ? 'bg-[#B4A06E] text-black' : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      STRICT
                    </button>
                    <button
                      onClick={() => setGameConfig({ ...gameConfig, rateLimiter: 'off' })}
                      className={`flex-1 py-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                        gameConfig.rateLimiter === 'off' ? 'bg-red-500 text-white' : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      OFF
                    </button>
                  </div>
                </div>

                {/* Lever 3: DB Connection Pool */}
                <div className="p-4 bg-[#0c0e14] border border-white/10 rounded-xl space-y-2">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase block">DB Pool Size</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setGameConfig({ ...gameConfig, dbPool: 15 })}
                      className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                        gameConfig.dbPool === 15 ? 'bg-[#B4A06E] text-black' : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      15
                    </button>
                    <button
                      onClick={() => setGameConfig({ ...gameConfig, dbPool: 50 })}
                      className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                        gameConfig.dbPool === 50 ? 'bg-[#B4A06E] text-black' : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      50
                    </button>
                    <button
                      onClick={() => setGameConfig({ ...gameConfig, dbPool: 100 })}
                      className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                        gameConfig.dbPool === 100 ? 'bg-[#B4A06E] text-black' : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      100
                    </button>
                  </div>
                </div>

                {/* Lever 4: Worker Engine */}
                <div className="p-4 bg-[#0c0e14] border border-white/10 rounded-xl space-y-2">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase block">AI Execution Worker</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setGameConfig({ ...gameConfig, computeWorker: 'lambda' })}
                      className={`flex-1 py-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                        gameConfig.computeWorker === 'lambda' ? 'bg-[#B4A06E] text-black' : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      LAMBDA QUEUE
                    </button>
                    <button
                      onClick={() => setGameConfig({ ...gameConfig, computeWorker: 'direct' })}
                      className={`flex-1 py-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                        gameConfig.computeWorker === 'direct' ? 'bg-red-500 text-white' : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      DIRECT SERVER
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Launch Game Button */}
            <div className="flex justify-center pt-2">
              <button
                onClick={runArchitectGame}
                disabled={gameRunning}
                className="px-8 py-4 bg-[#B4A06E] hover:bg-white text-black font-mono text-sm uppercase tracking-widest font-bold rounded-2xl flex items-center gap-3 shadow-xl shadow-[#B4A06E]/20 transition-all active:scale-95 disabled:opacity-50"
              >
                {gameRunning ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                    <span>SIMULATING 50,000 REQ/S SURGE...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 fill-black" />
                    <span>LAUNCH ARCHITECT STRESS SURGE ⚡</span>
                  </>
                )}
              </button>
            </div>

            {/* Game Result Card */}
            {gameResult && (
              <div className={`p-6 sm:p-8 rounded-2xl border transition-all animate-in fade-in duration-300 ${
                gameResult.passed 
                  ? 'bg-emerald-950/20 border-emerald-500/50 shadow-2xl shadow-emerald-500/10' 
                  : 'bg-red-950/20 border-red-500/50 shadow-2xl shadow-red-500/10'
              }`}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${gameResult.passed ? 'bg-emerald-500 text-black' : 'bg-red-500 text-white'}`}>
                      {gameResult.passed ? <Trophy className="w-6 h-6" /> : <AlertOctagon className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="text-xl font-mono font-bold text-white">{gameResult.status}</h4>
                      <p className="text-xs font-mono text-neutral-400 mt-0.5">Architect Score: {gameResult.score}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 font-mono text-xs">
                    <div>
                      <span className="text-neutral-500 block text-[10px]">UPTIME</span>
                      <span className={`font-bold text-base ${gameResult.passed ? 'text-emerald-400' : 'text-red-400'}`}>
                        {gameResult.uptime}
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px]">P99 LATENCY</span>
                      <span className="font-bold text-base text-white">{gameResult.latency}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-sans leading-relaxed">
                  <div className="text-neutral-200">
                    <strong className="text-white font-mono uppercase">Diagnosis:</strong> {gameResult.diagnosis}
                  </div>
                  <div className="text-neutral-300">
                    <strong className="text-[#B4A06E] font-mono uppercase">Engineering Recommendation:</strong> {gameResult.recommendation}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
