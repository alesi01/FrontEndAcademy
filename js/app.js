/**
 * FRONTEND ACADEMY - APLICACIÓN PRINCIPAL
 * Gestión de Vistas, 4 Paletas x Modo Claro/Oscuro, Examen en Línea y Certificados
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // ESTADO GLOBAL DE LA APLICACIÓN
  // ==========================================
  const state = {
    currentView: 'inicio',
    themePalette: localStorage.getItem('fa_theme_palette') || 'indigo',
    themeMode: localStorage.getItem('fa_theme_mode') || 'dark',
    exam: {
      active: false,
      technology: 'javascript',
      technologyName: 'JavaScript',
      questions: [],
      currentIndex: 0,
      userAnswers: {}, // { [questionIndex]: selectedOptionIndex }
      totalTimeSeconds: 45 * 60, // 45 minutos
      timeLeftSeconds: 45 * 60,
      timerInterval: null,
      startTime: null,
      questionStartTimes: {},
      isFinished: false,
      score: 0,
      passed: false // REQUISITO: Falso por defecto. Solo pasa a true al responder >= 6/10 bien en la prueba
    },
    certificate: {
      studentName: 'Alex Rivera',
      technology: 'JavaScript',
      score: 0,
      credentialId: 'FA-' + Math.floor(100000 + Math.random() * 900000)
    }
  };

  // ==========================================
  // GESTOR DE TEMAS & PALETAS (4 PALETAS X 2 MODOS)
  // ==========================================
  const applyTheme = (palette, mode) => {
    state.themePalette = palette;
    state.themeMode = mode;

    document.documentElement.setAttribute('data-theme-palette', palette);
    document.documentElement.setAttribute('data-theme-mode', mode);

    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('fa_theme_palette', palette);
    localStorage.setItem('fa_theme_mode', mode);

    // Actualizar icono de modo
    const modeIcon = document.getElementById('theme-mode-icon');
    if (modeIcon) {
      modeIcon.textContent = mode === 'dark' ? 'light_mode' : 'dark_mode';
    }

    // Actualizar opciones activas en el dropdown de paletas
    document.querySelectorAll('.palette-option').forEach(opt => {
      if (opt.getAttribute('data-palette') === palette) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // Actualizar nombre de la paleta en el botón
    const paletteNames = {
      indigo: 'Índigo Clásico',
      emerald: 'Esmeralda Cyber',
      violet: 'Violeta Eléctrico',
      amber: 'Ámbar Atardecer'
    };
    const paletteLabel = document.getElementById('current-palette-name');
    if (paletteLabel) {
      paletteLabel.textContent = paletteNames[palette] || 'Índigo';
    }
  };

  // Inicializar tema guardado o por defecto
  applyTheme(state.themePalette, state.themeMode);

  // Toggle Modo Claro / Oscuro
  const modeToggleBtn = document.getElementById('btn-toggle-mode');
  if (modeToggleBtn) {
    modeToggleBtn.addEventListener('click', () => {
      const newMode = state.themeMode === 'dark' ? 'light' : 'dark';
      applyTheme(state.themePalette, newMode);
      showToast(`Cambiado a Modo ${newMode === 'dark' ? 'Oscuro' : 'Claro'}`);
    });
  }

  // Toggle Dropdown de Paletas
  const palettePickerBtn = document.getElementById('btn-palette-picker');
  const paletteDropdown = document.getElementById('palette-dropdown');

  if (palettePickerBtn && paletteDropdown) {
    palettePickerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      paletteDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!paletteDropdown.contains(e.target) && e.target !== palettePickerBtn) {
        paletteDropdown.classList.remove('show');
      }
    });

    document.querySelectorAll('.palette-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedPalette = btn.getAttribute('data-palette');
        applyTheme(selectedPalette, state.themeMode);
        paletteDropdown.classList.remove('show');
        showToast(`Paleta aplicada: ${btn.querySelector('span').textContent}`);
      });
    });
  }

  // ==========================================
  // NAVEGACIÓN ENTRE VISTAS (ROUTING SIMPLE)
  // ==========================================
  const switchView = (viewName) => {
    state.currentView = viewName;

    // Ocultar todas las secciones de vista
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active-view');
    });

    // Mostrar sección correspondiente
    const targetSection = document.getElementById(`view-${viewName}`);
    if (targetSection) {
      targetSection.classList.add('active-view');
    }

    // Actualizar enlaces de navegación activos
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view') === viewName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Actualizar items de sidebar de la plataforma
    document.querySelectorAll('.sidebar-item').forEach(item => {
      if (item.getAttribute('data-view') === viewName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Acciones específicas por vista
    if (viewName === 'test' && !state.exam.active) {
      startExam('javascript');
    } else if (viewName === 'certificados') {
      renderStandaloneCertificate();
    }
  };

  // Enlaces de navegación con data-view
  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const view = el.getAttribute('data-view');
      if (view) {
        switchView(view);
      }
    });
  });

  // Botón "Explorar Cursos" y "Empezar Evaluación"
  const heroExploreBtn = document.getElementById('hero-explore-btn');
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener('click', () => switchView('cursos'));
  }

  const heroStartExamBtn = document.getElementById('hero-start-exam-btn');
  if (heroStartExamBtn) {
    heroStartExamBtn.addEventListener('click', () => {
      switchView('test');
      startExam('javascript');
    });
  }

  const benchmarkStartBtn = document.getElementById('benchmark-start-btn');
  if (benchmarkStartBtn) {
    benchmarkStartBtn.addEventListener('click', () => {
      switchView('test');
      startExam('javascript');
    });
  }

  // ==========================================
  // RENDERIZADO DE LOS 6 CURSOS
  // ==========================================
  const renderCourses = (filter = 'todos') => {
    const grid = document.getElementById('courses-grid-container');
    if (!grid) return;

    let filtered = COURSES_DATA;
    if (filter !== 'todos') {
      filtered = COURSES_DATA.filter(c => c.category.toLowerCase().includes(filter.toLowerCase()));
    }

    grid.innerHTML = filtered.map(course => `
      <div class="course-card">
        <div class="course-header-meta">
          <div class="course-icon-badge">
            <span class="material-symbols-outlined">${course.icon}</span>
          </div>
          <span class="course-tag">${course.badge}</span>
        </div>
        <span style="font-size:12px; font-weight:700; color:var(--accent-primary); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:4px; display:block;">${course.level}</span>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-desc">${course.shortDesc}</p>
        
        <div class="course-meta-footer">
          <div style="display:flex; align-items:center; gap:4px;">
            <span class="material-symbols-outlined" style="font-size:16px;">schedule</span>
            <span>${course.duration}</span>
          </div>
          <div style="display:flex; align-items:center; gap:4px; color:var(--warning);">
            <span class="material-symbols-outlined" style="font-size:16px;">star</span>
            <span style="color:var(--text-primary); font-weight:600;">${course.rating}</span>
          </div>
        </div>

        <div class="course-actions-row">
          <button class="btn btn-outline btn-sm" style="flex:1;" onclick="openCourseModal('${course.id}')">
            <span class="material-symbols-outlined" style="font-size:16px;">menu_book</span>
            Ver Programa
          </button>
          ${course.hasExam ? `
            <button class="btn btn-primary btn-sm" style="flex:1;" onclick="launchExamFromCourse('${course.id}')">
              <span class="material-symbols-outlined" style="font-size:16px;">quiz</span>
              Rendir Prueba
            </button>
          ` : `
            <button class="btn btn-primary btn-sm" style="flex:1;" onclick="showToast('Inscripción abierta para el próximo ciclo')">
              <span class="material-symbols-outlined" style="font-size:16px;">how_to_reg</span>
              Inscribirse
            </button>
          `}
        </div>
      </div>
    `).join('');
  };

  renderCourses();

  // Filtros de cursos
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter') || 'todos';
      renderCourses(filter);
    });
  });

  // Modal de Detalle de Curso
  window.openCourseModal = (courseId) => {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return;

    const modalTitle = document.getElementById('course-modal-title');
    const modalBody = document.getElementById('course-modal-content');
    const modal = document.getElementById('course-detail-modal');

    if (modalTitle && modalBody && modal) {
      modalTitle.textContent = course.title;
      modalBody.innerHTML = `
        <div style="margin-bottom:20px;">
          <p style="font-size:16px; color:var(--text-secondary); margin-bottom:16px;">${course.shortDesc}</p>
          <div style="display:flex; gap:16px; flex-wrap:wrap; margin-bottom:20px; font-size:13px;">
            <div style="padding:6px 12px; background:var(--bg-surface-elevated); border-radius:var(--radius-sm);"><strong>Nivel:</strong> ${course.level}</div>
            <div style="padding:6px 12px; background:var(--bg-surface-elevated); border-radius:var(--radius-sm);"><strong>Duración:</strong> ${course.duration}</div>
            <div style="padding:6px 12px; background:var(--bg-surface-elevated); border-radius:var(--radius-sm);"><strong>Estudiantes:</strong> ${course.students}</div>
          </div>
        </div>

        <h4 style="font-size:16px; font-weight:700; margin-bottom:12px; color:var(--text-primary);">Módulos del Programa Académico:</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:10px; margin-bottom:24px;">
          ${course.modules.map((m, idx) => `
            <li style="display:flex; align-items:center; gap:10px; font-size:14px; color:var(--text-primary); background:var(--bg-surface-elevated); padding:10px 14px; border-radius:var(--radius-md);">
              <span style="width:24px; height:24px; border-radius:50%; background:var(--accent-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700;">${idx + 1}</span>
              ${m}
            </li>
          `).join('')}
        </ul>

        <div style="display:flex; justify-content:flex-end; gap:12px; border-top:1px solid var(--border-subtle); padding-top:16px;">
          <button class="btn btn-outline" onclick="closeModal('course-detail-modal')">Cerrar</button>
          ${course.hasExam ? `
            <button class="btn btn-primary" onclick="closeModal('course-detail-modal'); launchExamFromCourse('${course.id}')">
              <span class="material-symbols-outlined">quiz</span>
              Iniciar Prueba en Línea
            </button>
          ` : `
            <button class="btn btn-primary" onclick="closeModal('course-detail-modal'); showToast('¡Solicitud de inscripción recibida con éxito!')">
              <span class="material-symbols-outlined">check_circle</span>
              Solicitar Cupo
            </button>
          `}
        </div>
      `;
      modal.classList.add('show');
    }
  };

  window.launchExamFromCourse = (tech) => {
    switchView('test');
    startExam(tech);
  };

  // ==========================================
  // MOTOR DE EVALUACIÓN / PRUEBA EN LÍNEA
  // ==========================================
  const startExam = (tech = 'javascript') => {
    const techMap = {
      javascript: 'JavaScript',
      html: 'HTML',
      css: 'CSS'
    };

    const techKey = tech.toLowerCase();
    const questions = getRandomQuestions(techKey, 10);

    state.exam = {
      active: true,
      technology: techKey,
      technologyName: techMap[techKey] || 'JavaScript',
      questions: questions,
      currentIndex: 0,
      userAnswers: {},
      totalTimeSeconds: 45 * 60,
      timeLeftSeconds: 45 * 60,
      timerInterval: null,
      startTime: Date.now(),
      questionStartTimes: {},
      isFinished: false,
      score: 0,
      passed: false
    };

    // Actualizar selector activo de tecnología
    document.querySelectorAll('.tech-select-pill').forEach(pill => {
      if (pill.getAttribute('data-tech') === techKey) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Actualizar títulos de la plataforma
    const examSubtitle = document.getElementById('exam-tech-subtitle');
    if (examSubtitle) {
      examSubtitle.textContent = `Evaluación Oficial de ${state.exam.technologyName}`;
    }

    // Iniciar Temporizador
    if (state.exam.timerInterval) {
      clearInterval(state.exam.timerInterval);
    }
    updateTimerDisplay();
    state.exam.timerInterval = setInterval(() => {
      if (state.exam.timeLeftSeconds > 0) {
        state.exam.timeLeftSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(state.exam.timerInterval);
        finishExam(true); // Auto submit por tiempo agotado
      }
    }, 1000);

    renderCurrentQuestion();
    updateTrajectoryMetrics();
  };

  // Actualizar visualización del Temporizador
  const updateTimerDisplay = () => {
    const timerEl = document.getElementById('exam-timer-val');
    const timerPill = document.getElementById('exam-timer-pill');
    if (!timerEl) return;

    const mins = Math.floor(state.exam.timeLeftSeconds / 60);
    const secs = state.exam.timeLeftSeconds % 60;
    timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (state.exam.timeLeftSeconds <= 300) {
      timerPill?.classList.add('timer-urgent');
    } else {
      timerPill?.classList.remove('timer-urgent');
    }
  };

  // Helper para escapar HTML y formatear código `codigo` de forma segura
  const formatTextWithCode = (str) => {
    if (!str) return '';
    const escaped = String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    return escaped.replace(/`([^`]+)`/g, '<code style="background:var(--accent-primary-light); color:var(--accent-primary); padding:2px 6px; border-radius:4px; font-family:var(--font-code); font-size:0.9em; border:1px solid var(--accent-primary-border);">$1</code>');
  };

  // Renderizar Pregunta Actual
  const renderCurrentQuestion = () => {
    const { questions, currentIndex, userAnswers } = state.exam;
    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    // Actualizar Stepper & Progreso
    const stepperLabel = document.getElementById('stepper-current-label');
    const stepperPercent = document.getElementById('stepper-percent-label');
    const stepperFill = document.getElementById('stepper-progress-fill');

    const progressPercentage = Math.round(((currentIndex + 1) / questions.length) * 100);

    if (stepperLabel) stepperLabel.textContent = `Pregunta ${currentIndex + 1} de ${questions.length}`;
    if (stepperPercent) stepperPercent.textContent = `${progressPercentage}% Completado`;
    if (stepperFill) stepperFill.style.width = `${progressPercentage}%`;

    // Renderizar Texto de la Pregunta
    const questionTextEl = document.getElementById('quiz-question-title');
    if (questionTextEl) {
      questionTextEl.innerHTML = formatTextWithCode(currentQ.question);
    }

    // Renderizar Opciones
    const optionsContainer = document.getElementById('quiz-options-container');
    if (optionsContainer) {
      const selectedOption = userAnswers[currentIndex];
      optionsContainer.innerHTML = currentQ.options.map((opt, idx) => `
        <div class="option-label ${selectedOption === idx ? 'selected' : ''}" onclick="selectExamOption(${idx})">
          <div class="option-check-circle">
            <span class="material-symbols-outlined" style="font-size:16px;">${selectedOption === idx ? 'check' : ''}</span>
          </div>
          <div class="option-text">${formatTextWithCode(opt)}</div>
        </div>
      `).join('');
    }

    // Actualizar Botón Anterior
    const prevBtn = document.getElementById('exam-prev-btn');
    if (prevBtn) {
      prevBtn.disabled = currentIndex === 0;
      prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
      prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    }

    // Actualizar Botón Siguiente / Finalizar
    const nextBtn = document.getElementById('exam-next-btn');
    if (nextBtn) {
      if (currentIndex === questions.length - 1) {
        nextBtn.innerHTML = `Finalizar Examen <span class="material-symbols-outlined" style="font-size:18px;">task_alt</span>`;
      } else {
        nextBtn.innerHTML = `Siguiente <span class="material-symbols-outlined" style="font-size:18px;">arrow_forward</span>`;
      }
    }
  };

  // Selección de opción por el usuario
  window.selectExamOption = (optionIndex) => {
    state.exam.userAnswers[state.exam.currentIndex] = optionIndex;
    renderCurrentQuestion();
    updateTrajectoryMetrics();
  };

  // Botón Siguiente
  const nextBtn = document.getElementById('exam-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const { questions, currentIndex, userAnswers } = state.exam;

      if (userAnswers[currentIndex] === undefined) {
        showToast('Por favor selecciona una respuesta antes de continuar');
        return;
      }

      if (currentIndex < questions.length - 1) {
        state.exam.currentIndex++;
        renderCurrentQuestion();
        updateTrajectoryMetrics();
      } else {
        // Finalizar examen
        finishExam(false);
      }
    });
  }

  // Botón Anterior
  const prevBtn = document.getElementById('exam-prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.exam.currentIndex > 0) {
        state.exam.currentIndex--;
        renderCurrentQuestion();
        updateTrajectoryMetrics();
      }
    });
  }

  // Actualizar métricas de Trayectoria en Vivo
  const updateTrajectoryMetrics = () => {
    const { questions, userAnswers, totalTimeSeconds, timeLeftSeconds } = state.exam;
    const answeredCount = Object.keys(userAnswers).length;

    // Calcular respuestas correctas hasta el momento
    let correctSoFar = 0;
    Object.entries(userAnswers).forEach(([qIdx, answerIdx]) => {
      const q = questions[parseInt(qIdx, 10)];
      if (q && q.correctAnswer === answerIdx) {
        correctSoFar++;
      }
    });

    const predictedScore = answeredCount > 0
      ? Math.round((correctSoFar / answeredCount) * 100)
      : 90;

    const predictedScoreEl = document.getElementById('trajectory-predicted-score');
    if (predictedScoreEl) {
      predictedScoreEl.textContent = `${predictedScore}`;
    }

    // Calcular ritmo
    const elapsedSeconds = totalTimeSeconds - timeLeftSeconds;
    const paceSeconds = answeredCount > 0 ? Math.round(elapsedSeconds / answeredCount) : 45;
    const paceMins = Math.floor(paceSeconds / 60);
    const paceSecs = paceSeconds % 60;

    const paceEl = document.getElementById('trajectory-pace-val');
    if (paceEl) {
      paceEl.textContent = paceMins > 0
        ? `${paceMins}m ${paceSecs}s / pregunta`
        : `${paceSecs}s / pregunta`;
    }

    // Indicador de estado (mínimo 6/10 para aprobar -> 60%)
    const statusEl = document.getElementById('trajectory-status-indicator');
    if (statusEl) {
      if (predictedScore >= 60) {
        statusEl.textContent = 'En Camino de Aprobación (≥6/10)';
        statusEl.style.color = 'var(--success)';
      } else {
        statusEl.textContent = 'Requiere Refuerzo (<6/10)';
        statusEl.style.color = 'var(--warning)';
      }
    }
  };

  // Selector de Tecnología en el examen
  document.querySelectorAll('.tech-select-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const tech = pill.getAttribute('data-tech');
      if (tech && tech !== state.exam.technology) {
        startExam(tech);
        showToast(`Iniciando prueba de ${tech.toUpperCase()} con 10 preguntas nuevas`);
      }
    });
  });

  // Finalizar Examen y Mostrar Resultados
  const finishExam = (autoSubmitted = false) => {
    if (state.exam.timerInterval) {
      clearInterval(state.exam.timerInterval);
    }
    state.exam.isFinished = true;

    // Calcular puntaje final
    let correctTotal = 0;
    state.exam.questions.forEach((q, idx) => {
      if (state.exam.userAnswers[idx] === q.correctAnswer) {
        correctTotal++;
      }
    });

    const finalScore = Math.round((correctTotal / state.exam.questions.length) * 100);
    // REQUISITO ESTRICTO: Aprobación con mínimo 6/10 (60%)
    const passed = correctTotal >= 6;

    state.exam.score = finalScore;
    state.exam.passed = passed;

    // Actualizar estado del certificado
    state.certificate.technology = state.exam.technologyName;
    state.certificate.score = finalScore;

    // Abrir modal de resultados
    openResultsModal(finalScore, correctTotal, state.exam.questions.length, passed, autoSubmitted);
  };

  // ==========================================
  // MODAL DE RESULTADOS Y GENERACIÓN DE CERTIFICADO
  // ==========================================
  const openResultsModal = (score, correct, total, passed, autoSubmitted) => {
    const modal = document.getElementById('results-certificate-modal');
    if (!modal) return;

    const scoreBadge = document.getElementById('results-score-badge');
    const titleEl = document.getElementById('results-main-title');
    const descEl = document.getElementById('results-desc-text');
    const studentInput = document.getElementById('cert-student-name-input');
    const btnDownloadPNG = document.getElementById('btn-download-cert-png');
    const btnDownloadJPG = document.getElementById('btn-download-cert-jpg');

    if (studentInput) {
      studentInput.value = state.certificate.studentName;
      studentInput.disabled = !passed;
    }

    if (scoreBadge) {
      scoreBadge.className = `results-score-badge ${passed ? 'passed' : 'failed'}`;
      scoreBadge.innerHTML = `
        <span class="material-symbols-outlined">${passed ? 'verified' : 'cancel'}</span>
        ${passed ? '¡APROBADO!' : 'NO APROBADO'} - ${correct}/${total} Respuestas Correctas (${score}%)
      `;
    }

    if (titleEl) {
      titleEl.textContent = passed
        ? '¡Felicitaciones! Has Aprobado la Certificación'
        : 'Examen No Aprobado (Mínimo 6/10 Requerido)';
    }

    if (descEl) {
      descEl.textContent = passed
        ? `Obtuviste ${correct} de ${total} respuestas correctas (${score}%). Has cumplido con la nota mínima requerida (6/10). Personaliza tu nombre a continuación y descarga tu certificado oficial en PNG o JPG.`
        : `Obtuviste ${correct} de ${total} respuestas correctas (${score}%). El certificado está bloqueado. Para desbloquear y descargar tu certificado oficial debes responder correctamente al menos 6 de las 10 preguntas (60%). ¡Inténtalo de nuevo!`;
    }

    // Configurar estado visual de botones de descarga
    if (btnDownloadPNG && btnDownloadJPG) {
      if (passed) {
        btnDownloadPNG.style.opacity = '1';
        btnDownloadPNG.style.pointerEvents = 'auto';
        btnDownloadJPG.style.opacity = '1';
        btnDownloadJPG.style.pointerEvents = 'auto';
      } else {
        btnDownloadPNG.style.opacity = '0.5';
        btnDownloadJPG.style.opacity = '0.5';
      }
    }

    // Dibujar Certificado en el Canvas
    renderCertificateToCanvas(passed);

    modal.classList.add('show');
  };

  // Renderizar certificado en Canvas en vivo
  const renderCertificateToCanvas = (isUnlocked = false) => {
    const canvas = document.getElementById('certificate-canvas');
    if (!canvas) return;

    const studentNameInput = document.getElementById('cert-student-name-input');
    const currentName = studentNameInput ? studentNameInput.value.trim() || 'Frontend Developer' : state.certificate.studentName;
    state.certificate.studentName = currentName;

    CertificateEngine.drawCertificate(canvas, {
      studentName: currentName,
      technology: state.certificate.technology || 'JavaScript',
      score: state.certificate.score || 0,
      credentialId: state.certificate.credentialId,
      themeColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim()
    });

    // Si NO aprobó o no ha rendido (<6/10), dibujar marca de agua de bloqueo
    if (!isUnlocked) {
      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.fillStyle = 'rgba(9, 12, 21, 0.82)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#ef4444';
      ctx.font = '700 46px "Hanken Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🔒 CERTIFICADO BLOQUEADO', canvas.width / 2, canvas.height / 2 - 20);

      ctx.fillStyle = '#ffffff';
      ctx.font = '500 24px "Hanken Grotesk", sans-serif';
      ctx.fillText('Debes rendir la prueba en línea y responder al menos 6 de 10 preguntas correctamente (60%) para descargarlo.', canvas.width / 2, canvas.height / 2 + 30);
      ctx.restore();
    }
  };

  // Re-dibujar al escribir el nombre en vivo
  const studentNameInput = document.getElementById('cert-student-name-input');
  if (studentNameInput) {
    studentNameInput.addEventListener('input', () => {
      if (state.exam.passed) {
        renderCertificateToCanvas(true);
      }
    });
  }

  // Botón Descargar PNG Modal
  const btnDownloadPNG = document.getElementById('btn-download-cert-png');
  if (btnDownloadPNG) {
    btnDownloadPNG.addEventListener('click', () => {
      if (!state.exam.passed) {
        showToast('⚠️ Certificado bloqueado. Debes responder al menos 6 de 10 preguntas correctamente en el examen.');
        return;
      }
      const canvas = document.getElementById('certificate-canvas');
      if (canvas) {
        const cleanName = state.certificate.studentName.replace(/\s+/g, '_');
        CertificateEngine.downloadPNG(canvas, `Certificado_${state.certificate.technology}_${cleanName}.png`);
        showToast('¡Certificado PNG descargado en alta resolución!');
      }
    });
  }

  // Botón Descargar JPG Modal
  const btnDownloadJPG = document.getElementById('btn-download-cert-jpg');
  if (btnDownloadJPG) {
    btnDownloadJPG.addEventListener('click', () => {
      if (!state.exam.passed) {
        showToast('⚠️ Certificado bloqueado. Debes responder al menos 6 de 10 preguntas correctamente en el examen.');
        return;
      }
      const canvas = document.getElementById('certificate-canvas');
      if (canvas) {
        const cleanName = state.certificate.studentName.replace(/\s+/g, '_');
        CertificateEngine.downloadJPG(canvas, `Certificado_${state.certificate.technology}_${cleanName}.jpg`);
        showToast('¡Certificado JPG descargado en alta resolución!');
      }
    });
  }

  // Descargar muestra / ver recompensa desde la tarjeta lateral del Examen
  const downloadSampleBtn = document.getElementById('download-sample-reward-btn');
  if (downloadSampleBtn) {
    downloadSampleBtn.addEventListener('click', () => {
      if (!state.exam.passed) {
        showToast('⚠️ Debes responder las 10 preguntas y aprobar con al menos 6/10 respuestas correctas para desbloquear el certificado.');
      } else {
        openResultsModal(state.exam.score, Math.round(state.exam.score / 10), 10, true, false);
      }
    });
  }

  // Renderizado de la vista independiente "Certificados" (#view-certificados)
  const renderStandaloneCertificate = () => {
    const standaloneCanvas = document.getElementById('standalone-cert-canvas');
    const container = document.getElementById('cert-standalone-container');

    if (!state.exam.passed) {
      // Bloqueado si no ha aprobado el examen
      if (container) {
        container.innerHTML = `
          <div style="background:var(--bg-surface); border:2px dashed var(--danger); border-radius:var(--radius-xl); padding:48px 24px; text-align:center; max-width:700px; margin:0 auto;">
            <span class="material-symbols-outlined" style="font-size:64px; color:var(--danger); margin-bottom:12px;">lock</span>
            <h2 style="font-size:24px; font-weight:800; color:var(--text-primary); margin-bottom:8px;">Certificado No Disponible</h2>
            <p style="font-size:15px; color:var(--text-secondary); max-width:500px; margin:0 auto 24px;">
              El certificado oficial solo se desbloquea y se puede descargar una vez que rindas y apruebes la prueba en línea con un mínimo de <strong>6 de 10 respuestas correctas (60%)</strong>.
            </p>
            <button class="btn btn-primary btn-lg" onclick="switchView('test')">
              <span class="material-symbols-outlined">quiz</span>
              Rendir Prueba en Línea Ahora
            </button>
          </div>
        `;
      }
    } else {
      // Desbloqueado si ya aprobó la prueba
      if (container) {
        container.innerHTML = `
          <div class="cert-customizer-form">
            <div class="form-group">
              <label for="cert-standalone-name-input">Nombre Completo para el Certificado:</label>
              <input type="text" class="form-input" id="cert-standalone-name-input" value="${state.certificate.studentName}" placeholder="Ingresa tu nombre y apellido" />
            </div>
            <div style="display:flex; gap:10px;">
              <button class="btn btn-primary" id="btn-standalone-png" style="flex:1;">
                <span class="material-symbols-outlined">image</span>
                Descargar PNG
              </button>
              <button class="btn btn-outline" id="btn-standalone-jpg" style="flex:1;">
                <span class="material-symbols-outlined">download</span>
                Descargar JPG
              </button>
            </div>
          </div>
          <div class="canvas-preview-wrapper">
            <canvas id="standalone-cert-canvas"></canvas>
          </div>
        `;

        const newCanvas = document.getElementById('standalone-cert-canvas');
        const newInput = document.getElementById('cert-standalone-name-input');
        const newPngBtn = document.getElementById('btn-standalone-png');
        const newJpgBtn = document.getElementById('btn-standalone-jpg');

        const redraw = () => {
          if (newCanvas) {
            CertificateEngine.drawCertificate(newCanvas, {
              studentName: newInput ? newInput.value.trim() || 'Frontend Developer' : state.certificate.studentName,
              technology: state.certificate.technology,
              score: state.certificate.score,
              credentialId: state.certificate.credentialId
            });
          }
        };
        redraw();

        if (newInput) newInput.addEventListener('input', redraw);
        if (newPngBtn) newPngBtn.addEventListener('click', () => {
          const name = newInput ? newInput.value.trim().replace(/\s+/g, '_') : 'Alex_Rivera';
          CertificateEngine.downloadPNG(newCanvas, `Certificado_${state.certificate.technology}_${name}.png`);
          showToast('¡Certificado PNG descargado!');
        });
        if (newJpgBtn) newJpgBtn.addEventListener('click', () => {
          const name = newInput ? newInput.value.trim().replace(/\s+/g, '_') : 'Alex_Rivera';
          CertificateEngine.downloadJPG(newCanvas, `Certificado_${state.certificate.technology}_${name}.jpg`);
          showToast('¡Certificado JPG descargado!');
        });
      }
    }
  };

  // Compartir en Redes Sociales
  const shareLinkedInBtn = document.getElementById('share-linkedin-btn');
  if (shareLinkedInBtn) {
    shareLinkedInBtn.addEventListener('click', () => {
      if (!state.exam.passed) {
        showToast('⚠️ Debes aprobar el cuestionario con mínimo 6/10 para compartir tu certificado.');
        return;
      }
      const text = encodeURIComponent(`¡Acabo de certificar mis habilidades en ${state.certificate.technology} con un puntaje de ${state.certificate.score}% en Frontend Academy! 🚀📜 #frontend #javascript #webdev #frontendacademy`);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://frontendacademy.org')}&summary=${text}`, '_blank');
    });
  }

  const shareTwitterBtn = document.getElementById('share-twitter-btn');
  if (shareTwitterBtn) {
    shareTwitterBtn.addEventListener('click', () => {
      if (!state.exam.passed) {
        showToast('⚠️ Debes aprobar el cuestionario con mínimo 6/10 para compartir tu certificado.');
        return;
      }
      const text = encodeURIComponent(`¡Aprobé la evaluación de ${state.certificate.technology} en @FrontendAcademy con ${state.certificate.score}%! 🎓💻 Aquí mi certificado oficial:`);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent('https://frontendacademy.org/verify/' + state.certificate.credentialId)}`, '_blank');
    });
  }

  const shareWhatsAppBtn = document.getElementById('share-whatsapp-btn');
  if (shareWhatsAppBtn) {
    shareWhatsAppBtn.addEventListener('click', () => {
      if (!state.exam.passed) {
        showToast('⚠️ Debes aprobar el cuestionario con mínimo 6/10 para compartir tu certificado.');
        return;
      }
      const text = encodeURIComponent(`¡Hola! Completé la certificación en ${state.certificate.technology} en Frontend Academy con ${state.certificate.score}% de calificación. Credencial: ${state.certificate.credentialId}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }

  const copyCertLinkBtn = document.getElementById('copy-cert-link-btn');
  if (copyCertLinkBtn) {
    copyCertLinkBtn.addEventListener('click', () => {
      if (!state.exam.passed) {
        showToast('⚠️ Debes aprobar el cuestionario con mínimo 6/10 para compartir tu enlace.');
        return;
      }
      const link = `https://frontendacademy.org/verify/${state.certificate.credentialId}`;
      navigator.clipboard.writeText(link).then(() => {
        showToast('¡Enlace de verificación copiado al portapapeles!');
      }).catch(() => {
        showToast('Enlace: ' + link);
      });
    });
  }

  // ==========================================
  // HELPER MODAL & TOAST
  // ==========================================
  window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show');
    }
  };

  // Cerrar modales con clic fuera
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('show');
      }
    });
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('show'));
    }
  });

  // Notificación Toast
  const showToast = (message) => {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <span class="material-symbols-outlined" style="color:var(--accent-primary); font-size:20px;">info</span>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  };
});
