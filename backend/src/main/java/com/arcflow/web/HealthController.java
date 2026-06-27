package com.arcflow.web;

import java.time.Instant;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Lightweight status endpoint the frontend can ping to confirm the API is up.
 * Kubernetes/uptime probes should use the actuator endpoint at /actuator/health.
 */
@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public Map<String, Object> health() {
        return Map.of(
                "service", "arcflow-backend",
                "status", "ok",
                "timestamp", Instant.now().toString());
    }
}
